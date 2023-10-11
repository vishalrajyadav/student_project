// creating bubbles
function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 184; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;

    // Add event listeners to bubbles after generating them
    var bubbles = document.querySelectorAll(".bubble");
    bubbles.forEach(function (bubble) {
        bubble.addEventListener("click", function (e) {
            var clickedNum = Number(e.target.textContent);
            if (clickedNum === hitrn) {
                incscore();
                makeBubble();
                getHit();
            }
        });
    });
}

// adding timer function
var timer = 90;
var timerint;

function runtimer() {
    timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = '<h1 id="go"> GAME OVER <h1>';
            document.querySelector("#pbtm").innerHTML += '<button id="try-again">Try Again</button>';
            document.querySelector("#try-again").addEventListener("click", function () {
                restartGame();
            });
        }
    }, 1000);
}

var hitrn = 0;

// generate a random number for the target
function getHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

// initialize score to 0
var score = 0;
document.querySelector("#Scoreval").textContent = score; // Set score to 0 initially

// increasing score
function incscore() {
    score = score + 10;
    document.querySelector("#Scoreval").textContent = score;
}

// Event Bubbling
document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) {
        incscore();
        makeBubble();
        getHit();
    }
});

// Function to restart the game
function restartGame() {
    clearInterval(timerint);
    timer = 90;
    document.querySelector("#timerval").textContent = timer;
    score = 0;
    document.querySelector("#Scoreval").textContent = score;
    document.querySelector("#pbtm").innerHTML = ''; // Clear the game over message
    runtimer();
    makeBubble();
    getHit();
}

runtimer();
makeBubble();
getHit();
