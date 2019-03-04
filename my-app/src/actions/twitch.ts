/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store.js';
import { ClipsState } from '../reducers/twitch.js';
export const GET_CLIPS = 'GET_CLIPS';
export const STAR_CLIP = 'STAR_CLIP';
export const UNSTAR_CLIP = 'UNSTAR_CLIP';
export const TWITCH_SUCCESS = 'TWITCH_SUCCESS';
export const TWITCH_FAILURE = 'TWITCH_FAILURE';

export interface TwitchActionGetClips extends Action<'GET_CLIPS'> {clips: ClipsState};
export interface TwitchActionAddStarClip extends Action<'STAR_CLIP'> {clipId: string};
export interface TwitchActionUnstarClip extends Action<'UNSTAR_CLIP'> {clipId: string};
export interface TwitchActionTwitchSuccess extends Action<'TWITCH_SUCCESS'> {};
export interface TwitchActionTwitchFailure extends Action<'TWITCH_FAILURE'> {};
export type TwitchAction = TwitchActionGetClips | TwitchActionAddStarClip | TwitchActionUnstarClip | TwitchActionTwitchSuccess | TwitchActionTwitchFailure;

type ThunkResult = ThunkAction<void, RootState, undefined, TwitchAction>;

const CLIP_LIST = [
  {
    "id": "TriumphantAmusedCaterpillarRaccAttack",
    "url": "https://clips.twitch.tv/TriumphantAmusedCaterpillarRaccAttack",
    "embed_url": "https://clips.twitch.tv/embed?clip=TriumphantAmusedCaterpillarRaccAttack",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "115329922",
    "creator_name": "JKHighLight",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "Ibiza with insane ending",
    "view_count": 55905,
    "created_at": "2017-08-09T14:45:52Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/25965468176-offset-22257-60-preview-480x272.jpg"
  },
  {
    "id": "PiliableBloodyButterOptimizePrime",
    "url": "https://clips.twitch.tv/PiliableBloodyButterOptimizePrime",
    "embed_url": "https://clips.twitch.tv/embed?clip=PiliableBloodyButterOptimizePrime",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "115153730",
    "creator_name": "felkano",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "Quickscope straight outta hell",
    "view_count": 37742,
    "created_at": "2017-09-14T12:02:23Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/26253640592-offset-14762-preview-480x272.jpg"
  },
  {
    "id": "PiercingExuberantYakArsonNoSexy",
    "url": "https://clips.twitch.tv/PiercingExuberantYakArsonNoSexy",
    "embed_url": "https://clips.twitch.tv/embed?clip=PiercingExuberantYakArsonNoSexy",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "9381272",
    "creator_name": "dohfOs",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "why spray instead of tap? ibi replies",
    "view_count": 23197,
    "created_at": "2018-03-07T11:33:34Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/204302552-preview-480x272.jpg"
  },
  {
    "id": "SleepyLazyEelAsianGlow",
    "url": "https://clips.twitch.tv/SleepyLazyEelAsianGlow",
    "embed_url": "https://clips.twitch.tv/embed?clip=SleepyLazyEelAsianGlow",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "167094446",
    "creator_name": "Larzz",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "ibiza's settings",
    "view_count": 16546,
    "created_at": "2018-10-27T11:30:18Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C332485964-preview-480x272.jpg"
  },
  {
    "id": "AlluringIntelligentPanDoggo",
    "url": "https://clips.twitch.tv/AlluringIntelligentPanDoggo",
    "embed_url": "https://clips.twitch.tv/embed?clip=AlluringIntelligentPanDoggo",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "30879735",
    "creator_name": "snegrabbpingla",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "Ibizia Win Bugged Almost Kills Team Mate",
    "view_count": 15126,
    "created_at": "2017-12-06T01:10:58Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/159686493-preview-480x272.jpg"
  },
  {
    "id": "AbrasiveLivelyPineappleBlargNaut",
    "url": "https://clips.twitch.tv/AbrasiveLivelyPineappleBlargNaut",
    "embed_url": "https://clips.twitch.tv/embed?clip=AbrasiveLivelyPineappleBlargNaut",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "44705340",
    "creator_name": "Popond250",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "Great Grenade LUL",
    "view_count": 11907,
    "created_at": "2018-03-06T16:59:09Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/27832199200-offset-22900-preview-480x272.jpg"
  },
  {
    "id": "ImpartialRespectfulDunlinOSkomodo",
    "url": "https://clips.twitch.tv/ImpartialRespectfulDunlinOSkomodo",
    "embed_url": "https://clips.twitch.tv/embed?clip=ImpartialRespectfulDunlinOSkomodo",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "129857741",
    "creator_name": "MrBchannel",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "IBIZA กล่าวถึง MiTH",
    "view_count": 9229,
    "created_at": "2018-03-06T15:46:09Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/27832199200-offset-18520-preview-480x272.jpg"
  },
  {
    "id": "WrongSecretiveHamEagleEye",
    "url": "https://clips.twitch.tv/WrongSecretiveHamEagleEye",
    "embed_url": "https://clips.twitch.tv/embed?clip=WrongSecretiveHamEagleEye",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "173612658",
    "creator_name": "New_napat",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "8x spray WADUHEK !!",
    "view_count": 8392,
    "created_at": "2018-03-07T11:33:44Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/204302590-preview-480x272.jpg"
  },
  {
    "id": "ChillyPuzzledLapwingLeeroyJenkins",
    "url": "https://clips.twitch.tv/ChillyPuzzledLapwingLeeroyJenkins",
    "embed_url": "https://clips.twitch.tv/embed?clip=ChillyPuzzledLapwingLeeroyJenkins",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "49188632",
    "creator_name": "Dananaa",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "GUY CLOSE",
    "view_count": 7199,
    "created_at": "2017-09-01T13:19:14Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/26153084368-offset-19370-preview-480x272.jpg"
  },
  {
    "id": "BlightedRelatedPartridgeOSsloth",
    "url": "https://clips.twitch.tv/BlightedRelatedPartridgeOSsloth",
    "embed_url": "https://clips.twitch.tv/embed?clip=BlightedRelatedPartridgeOSsloth",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "146043869",
    "creator_name": "pexpokeka",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "Jesus",
    "view_count": 6306,
    "created_at": "2018-08-18T13:56:02Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/29974687152-offset-10254-preview-480x272.jpg"
  },
  {
    "id": "RoughImportantCoyoteMcaT",
    "url": "https://clips.twitch.tv/RoughImportantCoyoteMcaT",
    "embed_url": "https://clips.twitch.tv/embed?clip=RoughImportantCoyoteMcaT",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "101245529",
    "creator_name": "LAZENB00BY",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "Ibi Quickscope",
    "view_count": 6028,
    "created_at": "2017-10-04T15:04:32Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/26405626032-offset-2172-preview-480x272.jpg"
  },
  {
    "id": "IgnorantModernCroquetteKreygasm",
    "url": "https://clips.twitch.tv/IgnorantModernCroquetteKreygasm",
    "embed_url": "https://clips.twitch.tv/embed?clip=IgnorantModernCroquetteKreygasm",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "9381272",
    "creator_name": "dohfOs",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "fzzM",
    "view_count": 5036,
    "created_at": "2018-09-26T14:25:45Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C315841832-preview-480x272.jpg"
  },
  {
    "id": "TemperedToughHawkTBCheesePull",
    "url": "https://clips.twitch.tv/TemperedToughHawkTBCheesePull",
    "embed_url": "https://clips.twitch.tv/embed?clip=TemperedToughHawkTBCheesePull",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "175885699",
    "creator_name": "teszy",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "spray god",
    "view_count": 4769,
    "created_at": "2018-03-06T11:42:42Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/27832199200-offset-3908-preview-480x272.jpg"
  },
  {
    "id": "PunchyCarefulLocustCmonBruh",
    "url": "https://clips.twitch.tv/PunchyCarefulLocustCmonBruh",
    "embed_url": "https://clips.twitch.tv/embed?clip=PunchyCarefulLocustCmonBruh",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "92030770",
    "creator_name": "Ghuleh9",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "Ibiza quick scope",
    "view_count": 4575,
    "created_at": "2017-10-02T12:39:10Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/26390135344-offset-7695-12.500000000000037-preview-480x272.jpg"
  },
  {
    "id": "ComfortableAmorphousRedpandaPoooound",
    "url": "https://clips.twitch.tv/ComfortableAmorphousRedpandaPoooound",
    "embed_url": "https://clips.twitch.tv/embed?clip=ComfortableAmorphousRedpandaPoooound",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "118978781",
    "creator_name": "ostyy17",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "Ibiza no tag glitch",
    "view_count": 3913,
    "created_at": "2018-08-06T15:26:41Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C285634218-preview-480x272.jpg"
  },
  {
    "id": "BloodyAmazonianVelociraptorLitty",
    "url": "https://clips.twitch.tv/BloodyAmazonianVelociraptorLitty",
    "embed_url": "https://clips.twitch.tv/embed?clip=BloodyAmazonianVelociraptorLitty",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "47626079",
    "creator_name": "vezzer_",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "ibiL",
    "view_count": 3770,
    "created_at": "2017-09-26T11:39:04Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/26343273488-offset-8892.25-24.750000000000025-preview-480x272.jpg"
  },
  {
    "id": "HonestCredulousSwordMVGame",
    "url": "https://clips.twitch.tv/HonestCredulousSwordMVGame",
    "embed_url": "https://clips.twitch.tv/embed?clip=HonestCredulousSwordMVGame",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "171220211",
    "creator_name": "SyrenzTV",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "ibiza - คําทักทาย ibiza เพื่อนพี่กรีนพูดไทยได้ด้วยครับ - เเปล ►",
    "view_count": 3754,
    "created_at": "2018-03-06T14:41:24Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/203856818-preview-480x272.jpg"
  },
  {
    "id": "LitigiousInexpensiveMacaroniPoooound",
    "url": "https://clips.twitch.tv/LitigiousInexpensiveMacaroniPoooound",
    "embed_url": "https://clips.twitch.tv/embed?clip=LitigiousInexpensiveMacaroniPoooound",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "175885699",
    "creator_name": "teszy",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "look at that driving ",
    "view_count": 3694,
    "created_at": "2018-06-12T13:18:48Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/29059709536-offset-20216-preview-480x272.jpg"
  },
  {
    "id": "LightBreakableBeeSuperVinlin",
    "url": "https://clips.twitch.tv/LightBreakableBeeSuperVinlin",
    "embed_url": "https://clips.twitch.tv/embed?clip=LightBreakableBeeSuperVinlin",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "159854201",
    "creator_name": "miracleinv0ker",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "ibi & smoke <3",
    "view_count": 3587,
    "created_at": "2018-08-19T12:39:48Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C293448493-preview-480x272.jpg"
  },
  {
    "id": "ExcitedSuspiciousCaterpillarPeoplesChamp",
    "url": "https://clips.twitch.tv/ExcitedSuspiciousCaterpillarPeoplesChamp",
    "embed_url": "https://clips.twitch.tv/embed?clip=ExcitedSuspiciousCaterpillarPeoplesChamp",
    "broadcaster_id": "49316817",
    "broadcaster_name": "ibiza",
    "creator_id": "156024386",
    "creator_name": "r1zzlee",
    "video_id": "",
    "game_id": "493057",
    "language": "nl",
    "title": "FIXPUBG",
    "view_count": 3575,
    "created_at": "2018-11-01T15:37:11Z",
    "thumbnail_url": "https://clips-media-assets2.twitch.tv/AT-cm%7C335256861-preview-480x272.jpg"
  }
];

export const getTopCLips: ActionCreator<ThunkResult> = () => (dispatch) => {
  // Here you would normally get the data from the server. We're simulating
  // that by dispatching an async action (that you would dispatch when you
  // succesfully got the data back)
  console.log('getting clips');
  // You could reformat the data in the right format as well:
  const clips = CLIP_LIST.reduce((obj, clip) => {
    obj[clip.id] = clip
    return obj
  }, {} as ClipsState);

  dispatch({
    type: GET_CLIPS,
    clips
  });
};

// export const checkout: ActionCreator<ThunkResult> = () => (dispatch) => {
//   // Here you could do things like credit card validation, etc.
//   // If that fails, dispatch CHECKOUT_FAILURE. We're simulating that
//   // by flipping a coin :)
//   const flip = Math.floor(Math.random() * 2);
//   if (flip === 0) {
//     dispatch({
//       type: CHECKOUT_FAILURE
//     });
//   } else {
//     dispatch({
//       type: CHECKOUT_SUCCESS
//     });
//   }
// };

export const starClip: ActionCreator<ThunkResult> = (clipId) => (dispatch, getState) =>{
  const state = getState();
  // Just because the UI thinks you can add this to the cart
  // doesn't mean it's in the inventory (user could've fixed it);
  if (state.twitch!.clips[clipId]) {
    dispatch(starClipUnsafe(clipId));
  }
};

export const unStarClip: ActionCreator<TwitchActionUnstarClip> = (clipId) => {
  return {
    type: UNSTAR_CLIP,
    clipId
  };
};

export const starClipUnsafe: ActionCreator<TwitchActionAddStarClip> = (clipId) => {
  return {
    type: STAR_CLIP,
    clipId
  };
};
