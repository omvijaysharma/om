const allElements = document.querySelectorAll('*');
const allA = document.querySelectorAll('a');
/* ============================================================================ stars ==== */
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
const numStars = window.innerWidth;
const stars = [];
const starSize = 1;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create stars with random x positions and y positions
function createStars() {
    stars.length = 0; // Clear the existing stars array

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
        });
    }
}
// Initial star creation
createStars();

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Draw stars
    ctx.fillStyle = 'white'; // Set star color to white
    stars.forEach(star => {
        ctx.fillRect(star.x, star.y, starSize, starSize); // Draw star with dynamic size
    });

    // Move stars downwards
    stars.forEach(star => {
        star.y += 1; // Move star down by 1 pixel
        // Reset star position to the top if it moves out of view
        if (star.y > canvas.height) {
            star.y = 0; // Reset y position
            star.x = Math.random() * canvas.width; // Randomize x position
        }
    });

    requestAnimationFrame(draw); // Request the next frame
}

draw(); // Start drawing

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createStars(); // Recreate stars on resize
});/* ====================================================================== social page ==== */
const socialDiv = document.querySelector('.socialDiv');
const socialDivA = document.querySelector('.socialDiv a');
const idNameDivH4 = document.querySelector('.id-name-div h4');
const socialDivI = document.querySelector('.socialDiv i');
const crossBtn = document.querySelector("#crossBtn");

// link and id change and show karne ke liye
function showpage(link,id) {
    socialDivA.href = link;
    idNameDivH4.innerText = id;
    socialDiv.style.display = 'flex';
    crossBtn.style.animation = 'borderbigsmall 2s infinite';
}
// social div remove karne ke liye
function crosspage() {
    socialDiv.style.display = 'none';
    crossBtn.style.background = "#555";
    crossBtn.style.color = '#fff';
    crossBtn.style.animation = 'none';
}
// gmail
function sendEmail() {
    window.location.href = "mailto:boy644737@gmail.com?subject=Subject%20Here&body=Your%20message%20here";
}
/* ====================================================================== container ====== */
const container = document.querySelector('.container');
const gameContainer = document.querySelector('.gameContainer');
const socialBtnDiv = document.querySelector('.socialBtnDiv');
const crossContainerDivBtn = document.querySelector('#crossContainerDivBtn');
const websiteContainer = document.querySelector('.websiteContainer');
const appContainer = document.querySelector('.appContainer');
const otherContainer = document.querySelector('.otherContainer');

// ek default function of container 
function setVisibility(displayValue, elements) {
    elements.forEach(element => {
        element.style.display = displayValue;
    });
}
// container remove karne ke liye
function crossContainer() {
    setVisibility('flex', [socialBtnDiv, container]);
    setVisibility('none', [gameContainer, crossContainerDivBtn, websiteContainer, appContainer, otherContainer]);
}
// baaki container ko remove karke one container dekhne ke liye
function removeother() {
    setVisibility('none', [container, socialBtnDiv]);
    crossContainerDivBtn.style.display = 'flex';
}
// games container 
function games() {
    removeother();
    gameContainer.style.display = 'flex';
}
// websites container 
function website() {
    removeother();
    websiteContainer.style.display = 'flex';
}
// apps container 
function app() {
    removeother();
    appContainer.style.display = 'flex';
}
// others container 
function other() {
    removeother();
    otherContainer.style.display = 'flex';
}
/* =============================================================== background video ====== */
let modeColor = 'red'; // mode ke liye text color
let modeBorder = '#000'; // mode ke liye border color

const backgroundVideoDiv = document.querySelector('.backgroundVideoDiv');
const defultMode = document.querySelector('#defaultmode');
const modeBtn = document.querySelector('#mode');
const videoLink = document.querySelector('#videolink');

// mode 
function mode() {
    document.querySelector('#starCanvas').style.display = 'none';
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
// default mide
function defaultmode() {
    document.querySelector('#starCanvas').style.display = 'flex';
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
    document.querySelector('#mail').style.borderColor = '#0096ff';
}
/* ======================================================================================= */
