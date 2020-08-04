let twitch_client_id = 'qezpomfligmtrmcaw4s7mqijl5948e'
document.getElementById('twitch-auth-link').setAttribute('href', `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${twitch_client_id}&redirect_uri=${window.location.href.replace(/\/+$/, '')}&scope=viewing_activity_read`);



function enableClickToEnter() {
    document.getElementById('enter-to-enter').addEventListener('click', (e) => {
        document.getElementById('prof-bar').classList = 'profile-bar clicked';
        document.getElementById('filler-bar').classList = 'filler-bar clicked';
        document.getElementById('enter-to-enter').classList = 'enter-to-enter clicked';
        document.getElementById('enter-steps').classList = 'enter-steps clicked';
        addKaaroElement();
    
    });    
}



async function checkIfAuth() {
    var url = window.location.hash;
    let access_token = url.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
    console.log(`Do we have access token: ${!!access_token}`);
    return !!access_token; // TODO: better check. Hit API endpoint and confirm access token is Gucci
}


async function init() {
    if (await checkIfAuth()) {
        console.log('logged In');
        document.getElementById('login-msg').innerHTML = 'Success';
        document.getElementById('twitch-login').classList.add('logged-in');
        enableClickToEnter();
    } else {
        
    }
}

init();

async function addKaaroElement() {
    let customElementForClips = document.createElement('kaaro-clip-game');
    customElementForClips.setAttribute('id', 'kaaro-clips-el');
    document.getElementById('clips-game-div').appendChild(
        customElementForClips    
    );

    let customElementForGameList = document.createElement('kaaro-clip-game-list');
    customElementForGameList.setAttribute('id', 'kaaro-game-list');
    document.getElementById('game-bar').appendChild(
        customElementForGameList    
    );
    customElementForGameList.addEventListener('game-selected', (e) => {
        console.log(e);
        customElementForClips.setAttribute('game', e.detail);
    })
}