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

/*----Event Listener's/ DOM Manipulation-----*/

reset.addEventListener("click", reset);
hardReset.addEventListener("click", hardReset);



// Running through the grid without having to individually list them all 
let memes = document.getElementsByClassName('.inner');
console.log(memes);

for (let i= 0; i < memes.length; i++) {
    cells.addEventListener ('click', function(){
        console.log(i)
    })
}

// Setting the images into each Div 
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


function image () {
    let img = document.createElement("img");
    img.src = "https://i.kym-cdn.com/entries/icons/mobile/000/000/091/TrollFace.jpg"
    img.id = "img1"
    let a = document.getElementById("00");
    a.appendChild(img);
}
image();


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

/*------Game Logic------*/

// To allow player one to choose a card 

// To display the cards and turn them over 
let displayMeme = function() {
    this.classList.toggle("open")
    this.classList.toggle("show")
    this.classList.toggle("disabled")
    grid.addEventListener("click", displayMeme);
}

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
// function for resetting the game
// function for resetting the boxes after two are selected 
// function to print score results
// function to print winning player
// function to recognize which player is playing 
// function to reset the scoreboard so that the two players can start another round
