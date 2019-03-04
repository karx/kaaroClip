/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, property } from 'lit-element';

// This element is *not* connected to the Redux store.
class KlipClip extends LitElement {
  @property({type: String})
  title = '';

  @property({type: String})
  embed_url = '';

  @property({type: String})
  broadcaster_name = '';

  @property({type: String})
  thumbnail_url = '';

  @property({type: Number})
  view_count = 0;

  @property({type: String})
  created_at = 0;


  protected render() {
    return html`
      ${this.title}:
      <iframe
        src="${this.embed_url}"
        height="360"
        width="640"
        frameborder="0"
        scrolling="no"
        autoplay="off"
        allowfullscreen="true">
      </iframe>
      ${this.broadcaster_name}
      
    `;
  }
}

window.customElements.define('klip-clip', KlipClip);
