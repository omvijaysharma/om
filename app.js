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
     socialDivI.classList.remove('fa-instagram', 'fa-github', 'fa-linkedin', 'fa-youtube', 'fa-pinterest', 'fa-twitter');
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
    socialDivI.classList.add('fa-instagram');
}
function liteinstagrampage() {
    socialDivA.href = 'https://www.instagram.com/lite.edit?igsh=YzljYTk1ODg3Zg==';
    idNameDivH4.innerText = '@lite.edit';
   
    showpage();
    socialDivI.classList.add('fa-instagram');
}

function githubpage() {
    socialDivA.href = 'https://github.com/omvijaysharma';
    idNameDivH4.innerText = '@omvijaysharma';
   
    showpage();
    socialDivI.classList.add('fa-github');
}
function linkedinpage() {
    socialDivA.href = 'https://www.linkedin.com/in/vijay-sharma-a288a5312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
    idNameDivH4.innerText = '@vijaysharma';
   
    showpage();
    socialDivI.classList.add('fa-linkedin');
}
function youtubepage() {
    socialDivA.href = 'https://youtube.com/@liteedit?si=geioZd7sp1wRs96I';
    idNameDivH4.innerText = '@lite.edit';
   
    showpage();
    socialDivI.classList.add('fa-youtube');
}
function pinterestpage() {
    socialDivA.href = 'https://pin.it/5VpKP9z2e';
    idNameDivH4.innerText = '@liteedit';
   
    showpage();
    socialDivI.classList.add('fa-pinterest');
}
function twitterpage() {
    socialDivA.href = 'https://x.com/omvijaysharma';
    idNameDivH4.innerText = '@omvijaysharma';
   
    showpage();
    socialDivI.classList.add('fa-twitter');
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
let modeBorder = modeColor;

const backgroundVideo = document.querySelector('#backgroundVideo');
const defultMode = document.querySelector('#defaultmode');
const modeBtn = document.querySelector('#mode');
const videoLink = document.querySelector('#videolink');

function mode() {
    
    backgroundVideo.style.display = 'flex';
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
    backgroundVideo.style.display = 'none';
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
/* ====================================================== container background stars ===== */
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');


let stars = [];

function createStars() {
    for (let i = 0; i < 100; i++) { // Adjust number of stars as needed
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 1
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    ctx.fillStyle = 'white';

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    });
}

function updateStars() {
    stars.forEach(star => {
        star.x -= 1; // Move star to the left
        if (star.x < 0) {
            star.x = canvas.width; // Reset star to the right
            star.y = Math.random() * canvas.height; // Randomize height
        }
    });
}

function animate() {
    drawStars();
    updateStars();
    requestAnimationFrame(animate); // Repeat the animation
}

// Initialize stars and start animation
createStars();
animate();