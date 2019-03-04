/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { Reducer } from 'redux';
import { GET_CLIPS, STAR_CLIP, UNSTAR_CLIP, TWITCH_SUCCESS, TWITCH_FAILURE, TwitchAction } from '../actions/twitch.js';
import { createSelector } from 'reselect';
import { RootState, RootAction } from '../store.js';

export interface TwitchState {
  clips: ClipsState;
  stared: StaredState;
  error: string;
}
export interface ClipsState {
  [index:string]: ClipState;
}
export interface ClipState {
  id: string;
  url: string;
  embed_url: string;
  broadcaster_id: string;
  broadcaster_name: string;
  creator_id: string;
  creator_name: string;
  video_id: string;
  game_id: string;
  language: string;
  title: string;
  view_count: number;
  created_at: string;
  thumbnail_url: string;

  stars?: number;
}
export interface StaredState {
  [index:string]: number;
}
export interface StaredItem {
  id: string;
  url: string;
  embed_url: string;
  broadcaster_name: string;
  creator_name: string;
  game_id: string;
  language: string;
  title: string;
  thumbnail_url: string;
}

const INITIAL_STATE: TwitchState = {
  clips: {},
  stared: {},
  error: ''
};

const twitch: Reducer<TwitchState, RootAction> = (state = INITIAL_STATE, action) => {
  console.log('In reducer for Twitch');
  switch (action.type) {
    case GET_CLIPS:
      return {
        ...state,
        clips: action.clips
      };
    case STAR_CLIP:
    case UNSTAR_CLIP:
    case TWITCH_SUCCESS:
      return {
        ...state,
        clips: clips(state.clips, action),
        cart: stared(state.stared, action),
        error: ''
      };
    case TWITCH_FAILURE:
      return {
        ...state,
        error: 'Twitch clips failed. Please try again'
      };
    default:
      return state;
  }
};

// Slice reducer: it only reduces the bit of the state it's concerned about.
const clips = (state: ClipsState, action: TwitchAction) => {
  switch (action.type) {
    case STAR_CLIP:
    case UNSTAR_CLIP:
      const clipId = action.clipId;
      return {
        ...state,
        [clipId]: clip(state[clipId], action)
      };
    default:
      return state;
  }
};

const clip = (state: ClipState, action: TwitchAction) => {
  switch (action.type) {
    case STAR_CLIP:
      return {
        ...state,
        inventory: state.stars ? state.stars + 1 : 1
      };
    case UNSTAR_CLIP:
      return {
        ...state,
        inventory: state.stars ? state.stars - 1 : 0
      };
    default:
      return state;
  }
};

const stared = (state: StaredState, action: TwitchAction) => {
  switch (action.type) {
    case STAR_CLIP:
      const addId = action.clipId;
      return {
        ...state,
        [addId]: (state[addId] || 0) + 1
      };
    case UNSTAR_CLIP:
      const removeId = action.clipId;
      const quantity = (state[removeId] || 0) - 1;
      if (quantity <= 0) {
        const newState = {
          ...state
        };
        delete newState[removeId];
        return newState;
      } else {
        return {
          ...state,
          [removeId]: quantity
        }
      }
    case TWITCH_SUCCESS:
      return {};
    default:
      return state;
  }
};

export default twitch;

// Per Redux best practices, the shop data in our store is structured
// for efficiency (small size and fast updates).
//
// The _selectors_ below transform store data into specific forms that
// are tailored for presentation. Putting this logic here keeps the
// layers of our app loosely coupled and easier to maintain, since
// views don't need to know about the store's internal data structures.
//
// We use a tiny library called `reselect` to create efficient
// selectors. More info: https://github.com/reduxjs/reselect.

const staredSelector = (state: RootState) => state.twitch!.stared;
const clipsSelector = (state: RootState) => state.twitch!.clips;

// Return a flattened array representation of the items in the cart
export const staredClipSelector = createSelector(
  staredSelector,
  clipsSelector,
  (stared, clips) => {
    return Object.keys(stared).map(id => {
      const item = clips[id];
      return {
          id: item.id, 
          title: item.title, 
          url: item.url,
          embed_url: item.embed_url,
          broadcaster_name: item.broadcaster_name,
          creator_name: item.creator_name,
          game_id: item.game_id,
          language: item.language,
          thumbnail_url: item.thumbnail_url,
          view_count: item.view_count
        };

    });
  }
);

// Return the total cost of the items in the cart
export const staredTotalCountSelector = createSelector(
  staredSelector,
  
  (stared) => {
    
    return stared.length;
  }
);

// Return the number of items in the cart
export const staredViewQuantitySelector = createSelector(
  staredSelector,
  stared => {
    let num = 0;
    Object.keys(stared).forEach(id => {
      num += stared[id];
    });
    return num;
  }
);
