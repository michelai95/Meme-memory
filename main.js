/*------Dom Ref's---*/
let a = document.getElementById('00');
let b = document.getElementById('01');
let c = document.getElementById('02');
let d = document.getElementById('03');
let e = document.getElementById('04');
let f = document.getElementById('05');
let g = document.getElementById('06');
let h = document.getElementById('07');
let i = document.getElementById('08');
let j = document.getElementById('09');
let k = document.getElementById('10');
let l = document.getElementById('11');
let m = document.getElementById('12');
let n = document.getElementById('13');
let o = document.getElementById('14');
let p = document.getElementById('15');
let turn = 0;
let grid = document.getElementById("grid");
let score1 = document.getElementById("score1");
let score2 = document.getElementById('score2')
let reset = document.getElementById("button");
let hardReset = document.getElementById('restart');

let memesBox = ['https://i.kym-cdn.com/entries/icons/mobile/000/000/091/TrollFace.jpg', 
'https://i.kym-cdn.com/entries/icons/mobile/000/009/479/Ermahgerd.jpg',
'https://i.kym-cdn.com/entries/icons/mobile/000/030/157/womanyellingcat.jpg',
'https://i.kym-cdn.com/entries/icons/mobile/000/017/618/pepefroggie.jpg',
'https://i.kym-cdn.com/entries/icons/mobile/000/007/831/10GUY.jpg',
'https://i.kym-cdn.com/entries/icons/medium/000/000/056/itsover1000.jpg',
'https://i.kym-cdn.com/entries/icons/medium/000/015/878/thatsnoneofmy.jpg',
'https://i.kym-cdn.com/entries/icons/medium/000/000/043/disaster-girl.jpg',
'https://i.kym-cdn.com/entries/icons/medium/000/000/881/chubbybubbles.jpg',
'https://i.kym-cdn.com/entries/icons/mobile/000/000/091/TrollFace.jpg', 
'https://i.kym-cdn.com/entries/icons/mobile/000/009/479/Ermahgerd.jpg',
'https://i.kym-cdn.com/entries/icons/mobile/000/030/157/womanyellingcat.jpg',
'https://i.kym-cdn.com/entries/icons/mobile/000/017/618/pepefroggie.jpg',
'https://i.kym-cdn.com/entries/icons/mobile/000/007/831/10GUY.jpg',
'https://i.kym-cdn.com/entries/icons/medium/000/000/056/itsover1000.jpg',
'https://i.kym-cdn.com/entries/icons/medium/000/015/878/thatsnoneofmy.jpg',
'https://i.kym-cdn.com/entries/icons/medium/000/000/043/disaster-girl.jpg',
'https://i.kym-cdn.com/entries/icons/medium/000/000/881/chubbybubbles.jpg'];

/*----Event Listener's/ DOM Manipulation-----*/

reset.addEventListener("click", reset);
hardReset.addEventListener("click", hardReset);



// Running through the grid without having to individually list them all 
let memes = document.getElementsByClassName('inner');
console.log(memes);

for (let i= 0; i < memes.length; i++) {
    // Function to change the images when the player selects one of the div's
    // To display the cards and turn them over 
    let displayMeme = function() {
        this.classList.toggle("front")
        this.classList.toggle("back")
        this.classList.toggle("disabled")
    }
    memes[i].addEventListener ('click', displayMeme)
}

const cards = document.querySelectorAll('.inner');
function flipMeme() {
    this.classList.toggle('flip');
}

cards.forEach(memes =>
    card.addEventListener('click', displayMeme));


/*------Game Logic------*/

// Starting game function

// function startGame() {
//     let shuffleMemes = shuffle(memesBox);
//     for (i=0; i < shuffleMemes.length; i++);
//     cardElements[i].appendChild(shuffleMemes[i])
// }

// Starts the game once the window is opened
window.onload = startGame();

// Defining the players and their current move 
let playerOne = {
    points: 0,
    currentChoice: null,
    allChoices: []
};

let playerTwo = {
    points: 0,
    currentChoice: null,
    allChoices: []
}; 

// To allow player one to choose a card 

// To allow player two to choose a card 

// The timer 
let second = 0, minute = 0;
let timer = document.querySelector("#time");
let interval; 
function countdown() {
    interval = setInterval(function() {
        timer.textContent = minute+"minutes "+second+"seconds ";
    })
}

// function to checkWin




// function for time interval
const STARTING_TIME = 0;
let remainingTime = 700; 
let gameOver = true;


function updateClock() {
    remainingTime++
    timer.textContent = "00:00" + remainingTime;
    if (remainingTime <= 700) {
        endGame(false)
    }
}

function endGame(win) {
    clearInterval(countdown)
    gameOver = true;
    hardReset.disabled = false;
    if (win) {
        timer.classList.add("green");
    } else { // add animation of losing emoji
        body.classList.add("green");
    }
}

// function for resetting the game
// function for resetting the boxes after two are selected 
// function to print score results
// function to print winning player
// function to recognize which player is playing 
// function to reset the scoreboard so that the two players can start another round


/*----Archives-----*/

// Setting the images into each Div - need a function for this 
// document.getElementById('00').innerText = '<img width="100" height="100" src="https://i.kym-cdn.com/entries/icons/mobile/000/000/091/TrollFace.jpg">';
// document.getElementById('01').innerText =
// document.getElementById('02').innerText =
// document.getElementById('03').innerText =
// document.getElementById('04').innerText =
// document.getElementById('05').
// document.getElementById('06').
// document.getElementById('07').
// document.getElementById('08').
// document.getElementById('09').
// document.getElementById('10').
// document.getElementById('11').
// document.getElementById('12').
// document.getElementById('13').
// document.getElementById('14').
// document.getElementById('15').

// function image () {
//     let img = document.createElement("img");
//     for (let i=0; i < memesBox.length; i++)
//     img.src = 'https://i.kym-cdn.com/entries/icons/mobile/000/000/091/TrollFace.jpg';
//     img.id = "img1"
//     // let a = document.getElementById("00");
//     let allBoxes = document.getElementsByClassName("inner");
//     let randomBox = allBoxes[Math.floor(Math.random() * 16)]
//     randomBox.appendChild(img);
//     // let allMemes = document.querySelector('.img').addEventListener('click', function() {

//     // })
// }
// image();

// // Function to change the images when the player selects one of the div's
// This is placing the meme memory cards into the div with the current image! - learned with Yash the bomb.com
// function flipCards(e) {
//     let img = document.createElement('img'); 
//     let randomLink = memesBox[Math.floor(Math.random() *16)]
//     img.src = randomLink;
//     e.target.src = randomLink;
//     console.log("You clicked " + e.target.id);
//     // is adding an image to the side of the original - I want them to flip 
// }