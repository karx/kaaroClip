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

  firstUpdated() {
    this._draw();
  }

  protected render() {
    return html`
      

      <canvas id="myCanvas" width="400" height="300"}></canvas>

      
    `;
  }

  
  

  private _draw() {
    if (!this || !this.shadowRoot) {
      return;
    }
    var c = this.shadowRoot.getElementById("myCanvas");
    // var ctx = c.getContext("2d");


    if (c && (c as any).getContext) {
            
      // use getContext to use the canvas for drawing
      var ctx = (c as any).getContext('2d');
      
      // Draw shapes
      var imageObj = new Image();
     imageObj.onload = () => {
         ctx.drawImage(imageObj, 0, 0);
         ctx.font = "14pt Calibri";
         var gradient = ctx.createLinearGradient(0, 0, (c as any).width, 0);
          gradient.addColorStop("0", "#3333F3");
          gradient.addColorStop("0.5", "#FFFFFF");
          gradient.addColorStop("1.0", "#000000");
          // Fill with gradient
          ctx.fillStyle = gradient;

         ctx.fillText(this.title, 50, 20);

         ctx.font = "14pt Calibri";
         var gradient = ctx.createLinearGradient(0, 0, (c as any).width, 0);
          gradient.addColorStop("0", "#F33333");
          gradient.addColorStop("0.5", "#FFFFFF");
          gradient.addColorStop("1.0", "#000000");
          // Fill with gradient
          ctx.fillStyle = gradient;

         ctx.fillText(this.broadcaster_name, 50, 240);
         ctx.fillText(this.view_count, 50, 260);
         
     };
     imageObj.src = this.thumbnail_url; 
   } else {
      alert('You need Safari or Firefox 1.5+ to see this demo.');
   }

  }
}

window.customElements.define('klip-clip', KlipClip);
  