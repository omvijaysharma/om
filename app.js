const allElements = document.querySelectorAll('*');
const allA = document.querySelectorAll('a');
/* ====================================================================== social page ==== */
const socialDiv = document.querySelector('.socialDiv');
const socialDivA = document.querySelector('.socialDiv a');
const idNameDivH4 = document.querySelector('.id-name-div h4');
const socialDivI = document.querySelector('.socialDiv i');
const crossBtn = document.querySelector("#crossBtn");

function showpage() {
    socialDiv.style.display = 'flex';
     crossBtn.style.animation = 'borderbigsmall 2s infinite';
}
function crosspage() {
    socialDiv.style.display = 'none';
    crossBtn.style.background = "#555";
    crossBtn.style.color = '#fff';
    crossBtn.style.animation = 'none';
}

function instagrampage() {
    socialDivA.href = 'https://www.instagram.com/om.vijay.sharma?igsh=YzljYTk1ODg3Zg==';
    idNameDivH4.innerText = '@om.vijay.sharma';
   
    showpage();
}
function liteinstagrampage() {
    socialDivA.href = 'https://www.instagram.com/lite.edit?igsh=YzljYTk1ODg3Zg==';
    idNameDivH4.innerText = '@lite.edit';
   
    showpage();
}

function githubpage() {
    socialDivA.href = 'https://github.com/omvijaysharma';
    idNameDivH4.innerText = '@omvijaysharma';
   
    showpage();
}
function linkedinpage() {
    socialDivA.href = 'https://www.linkedin.com/in/vijay-sharma-a288a5312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
    idNameDivH4.innerText = '@vijaysharma';
   
    showpage();
}
function youtubepage() {
    socialDivA.href = 'https://youtube.com/@liteedit?si=geioZd7sp1wRs96I';
    idNameDivH4.innerText = '@lite.edit';
   
    showpage();
}
function pinterestpage() {
    socialDivA.href = 'https://pin.it/5VpKP9z2e';
    idNameDivH4.innerText = '@liteedit';
   
    showpage();
}
function twitterpage() {
    socialDivA.href = 'https://x.com/omvijaysharma';
    idNameDivH4.innerText = '@omvijaysharma';
   
    showpage();
}
/* ====================================================================== container ====== */
const container = document.querySelector('.container');
const gameContainer = document.querySelector('.gameContainer');
const socialBtnDiv = document.querySelector('.socialBtnDiv');
const crossContainerDivBtn = document.querySelector('#crossContainerDivBtn');
const websiteContainer = document.querySelector('.websiteContainer');
const appContainer = document.querySelector('.appContainer');
const otherContainer = document.querySelector('.otherContainer');

function setVisibility(displayValue, elements) {
    elements.forEach(element => {
        element.style.display = displayValue;
    });
}
function crossContainer() {
    setVisibility('flex', [socialBtnDiv, container]);
    setVisibility('none', [gameContainer, crossContainerDivBtn, websiteContainer, appContainer, otherContainer]);
}
function removeother() {
    setVisibility('none', [container, socialBtnDiv]);
    crossContainerDivBtn.style.display = 'flex';
}
function games() {
    removeother();
    gameContainer.style.display = 'flex';
}
function website() {
    removeother();
    websiteContainer.style.display = 'flex';
}
function app() {
    removeother();
    appContainer.style.display = 'flex';
}
function other() {
    removeother();
    otherContainer.style.display = 'flex';
}
/* ============================================================================= today === */
function getCurrentDay() {
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const todayIndex = new Date().getDay();
    return daysOfWeek[todayIndex];
}

let today = getCurrentDay();
/* =============================================================== background video ====== */
let modeColor = '#40ff63';
let modeBorder = '#000';

const backgroundVideoDiv = document.querySelector('.backgroundVideoDiv');
const defultMode = document.querySelector('#defaultmode');
const modeBtn = document.querySelector('#mode');
const videoLink = document.querySelector('#videolink');

function mode() {
    
    backgroundVideoDiv.style.display = 'flex';
    defultMode.style.display = 'flex';
    modeBtn.style.display = 'none';
    
    allElements.forEach(element => {
        element.style.borderColor = modeBorder;
        element.style.color = modeColor;
    });
    allA.forEach(a => {
        a.style.background = modeBorder;
        a.style.color = modeColor
    });
    document.querySelector('.socialDiv a').style.background = 'transparent'; 
    document.querySelector('#om').style.borderColor = modeColor;
}

function defaultmode() {
    backgroundVideoDiv.style.display = 'none';
    defultMode.style.display = 'none';
    modeBtn.style.display = 'flex';
 
    allElements.forEach(element => {
        element.style.borderColor = '#fff';
        element.style.color = '#fff';
    });
    allA.forEach(a => {
        a.style.background = '#fff';
        a.style.color = '#000';
    });
    document.querySelector('.socialDiv a').style.background = 'transparent';
}
/* ======================================================================================= */
