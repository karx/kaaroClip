
class BasicWebComponent extends HTMLElement {
  schema = {
    'game': {type: 'string', default: '32982'},
    'post': {type: 'string', default: ''},
    'token': {type: 'string', default: ''}
  }
  constructor() {
    super(); // this is mandatory
    console.log(this.schema);
  }

  connectedCallback() {
    this.data = new Object();
    this.data.game = this.getAttribute('game') || this.schema.game.default;
    
    // const _wrapper = document.createElement('div');
    // _wrapper.style.display = 'inherit';
    
    // let shadowRoot = this.attachShadow({ mode: 'open' });
    // shadowRoot.appendChild(_wrapper);
    // shadowRoot.addEventListener('click', (event) => {
    //   this.updateClipboard(toClip)
    // });
    var url = window.location.hash;
    let access_token = url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
    this.data.access_token = access_token;
    console.log(access_token);
    this.init();
  }

  async attributeChangedCallback(attr, oldVal, newVal) {   
    console.log(attr);
    console.log(oldVal);
    console.log(newVal);
    if (attr === 'game') {
      this.data.game = newVal;
    
      let clipData = await this.getClipData();
      this.clipData = clipData.data;
    
      this.clipData.forEach( (clip) => {
        console.log(clip);
        let clipURL = clip.thumbnail_url.replace('-preview-480x272.jpg','.mp4');
        this.addVidToDOM(clipURL, clip.thumbnail_url);
      })
    
    }
    
  }

  async init(getNew = false) {
    if(this.clipData && !getNew) {

    } else {
      console.log('getting CLip[s');
      let clipData = await this.getClipData();
      this.clipData = clipData.data;
    }
    this.clipData.forEach( (clip) => {
      console.log(clip);
      let clipURL = clip.thumbnail_url.replace('-preview-480x272.jpg','.mp4');
      this.addVidToDOM(clipURL, clip.thumbnail_url);
    })
    
  }

  async addVidToDOM(vodURL, thumbnail_url) {
    let vidContainerDiv = document.createElement('div');
    let vodElm = document.createElement('video');
    vidContainerDiv.classList = 'each-clip';

    vodElm.setAttribute('src', vodURL);
    vodElm.setAttribute('poster', thumbnail_url);
    vodElm.setAttribute('preload', 'metadata');
    
    vidContainerDiv.append(vodElm);
    console.log('Test log');
    var timeout = null;

    vodElm.addEventListener('mouseover', (elm) => {
      console.log('On mouse Over: ');
      timeout = setTimeout( () => vodElm.play(), 1000);
      
    });
    vodElm.addEventListener('mouseout', (elm) => {
      clearTimeout(timeout);
      vodElm.pause();
    });
    
    vodElm.addEventListener( 'click', (e) => {
      console.log(`Click registered`);
    })
    
    // this.shadowRoot.append(vidContainerDiv);
    this.append(vidContainerDiv);
  }

  async getClipData() {
    
    let twitch_url = new URL(`https://api.twitch.tv/helix/clips`);
    twitch_url.search = new URLSearchParams({
      game_id: this.data.game
    });
      // Default options are marked with *
      const response = await fetch(twitch_url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Client-ID': 'qezpomfligmtrmcaw4s7mqijl5948e',
          'Authorization': 'Bearer ' + this.data.access_token
        },
      });
      return response.json(); // parses JSON response into native JavaScript objects
  }
  
}

BasicWebComponent.observedAttributes = ['game', 'post', 'token'];

customElements.define('kaaro-clip-game', BasicWebComponent);