/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, css, property } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store, RootState } from '../store.js';

// These are the elements needed by this element.
import './klip-clip.js';

// These are the actions needed by this element.
import { getTopCLips, starClip } from '../actions/twitch.js';


// These are the shared styles needed by this element.
import { ButtonSharedStyles } from './button-shared-styles.js';
import { ClipsState } from '../reducers/twitch.js';


class KlipClips extends connect(store)(LitElement) {
  @property({type: Object})
  private _clips: ClipsState = {};

  static styles = [
    ButtonSharedStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `
  ];

  protected render() {
    return html`
      ${Object.keys(this._clips).map((key) => {
        const item = this._clips[key];
        return html`
          <div @click=${ () => this._clip_clicked(item)}>

            <klip-clip title="${item.title}" 
            embed_url="${item.embed_url}"
            broadcaster_name="${item.broadcaster_name}" 
            thumbnail_url="${item.thumbnail_url}" 
            view_count="${item.view_count}" 
            created_at="${item.created_at}"

            

            ></klip-clip>
            
          </div>
        `;
      })}
    `;
  }

  protected firstUpdated() {
    store.dispatch(getTopCLips());
  }

  private _addButtonClicked(e: Event) {
    store.dispatch(starClip((e.currentTarget as HTMLButtonElement).dataset['index']));
  }

  private _clip_clicked(clip) {
    console.log('in The Reactive One');
    console.log(clip.title);
  }

  // This is called every time something is updated in the store.
  stateChanged(state: RootState) {
    this._clips = state.twitch!.clips;
  }
}

window.customElements.define('klip-clips', KlipClips);
