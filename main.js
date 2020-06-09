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
grid.addEventListener("click", )


// Running through the grid without having to individually list them all 
let memes = document.getElementsByClassName('.inner');
console.log(memes);

for (let i= 0; i < memes.length; i++) {
    cells.addEventListener ('click', function(){
        console.log(i)
    })
}

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

// To display the cards and turn them over 
var displayMeme = function() {
    this.classList.toggle("open")
    this.classList.toggle("show")
    this.classList.toggle("disabled")
}


// The timer 
var second = 0, minute = 0;
var timer = document.querySelector("#time");
var interval; 
function countdown() {
    interval = setInterval(function() {
        timer.textContent = minute+"minutes "+second+"seconds ";
    })
}