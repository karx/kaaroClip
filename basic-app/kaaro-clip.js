
class BasicWebComponent extends HTMLElement {
  schema = {
    'clip': {type: 'string', default: ''},
    'post': {type: 'string', default: ''},
    
  }
  constructor() {
    super(); // this is mandatory
    console.log(this.schema);
  }

  connectedCallback() {
    // this.data = new Object()
    let clip = this.getAttribute('clip') || this.schema.clip.default;
    
    const _wrapper = document.createElement('div');
    _wrapper.style.display = 'inherit';
    
    let shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(_wrapper);
    shadowRoot.addEventListener('click', (event) => {
      this.updateClipboard(toClip)
    });
    this.init();
  }

  attributeChangedCallback(attr, oldVal, newVal) {   
  }

  async init() {
    let clipData = await this.getClip();
    console.log(clipData);
  }

  async getClip() {
    let url = new URL('https://sl.se')
    


    let twitch_url = new URL(`https://api.twitch.tv/helix/clips`);
    twitch_url.search = new URLSearchParams({
      broadcaster_id:'karx01'
    });
      // Default options are marked with *
      const response = await fetch(twitch_url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        //   // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body: {
        //   'broadcaster_id': 'karx01'
        // }
      });
      return response.json(); // parses JSON response into native JavaScript objects
  }
  
}

BasicWebComponent.observedAttributes = ['clip', 'post'];

customElements.define('kaaro-clip', BasicWebComponent);