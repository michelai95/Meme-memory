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
let refresh = document.getElementById("button");
let hardReset = document.getElementById('restart');
let points = document.getElementsByClassName('points');
let memesBox = [];
let score = 0;
let mismatch = 0;
let printScore = document.getElementsByClassName('printScore');

/*----Event Listener's/ DOM Manipulation-----*/

refresh.addEventListener("click", reset);
// hardReset.addEventListener("click", hardReset);


// Running through the grid without having to individually list them all 
let memes = document.getElementsByClassName('inner');
// console.log(memes);


for (let i = 0; i < memes.length; i++) {
    memes[i].addEventListener('click', flip);
}

// worked with Yash to get my matching condition to work properly - I was selecting the wrong object from my HTML 
// function for resetting the boxes after two are selected 
// checkwin function 
var clicks = 0;

function flip(e) {

    this.classList.add('active');

    memesBox.push(this);

    // var clicks = memesBox.length;
    clicks++;
    if (clicks == 2) {
        let clickedCards = document.getElementsByClassName('active');
        if (memesBox[0].children[1].src === memesBox[1].children[1].src) {
            score++;
            score1.textContent = "Matches: " + score;


            for (let i = 0; i < clickedCards.length; i++) {
                memesBox[0].classList.add('matched');
                memesBox[1].classList.add('matched');
                memesBox[0].classList.remove('active');
                memesBox[1].classList.remove('active');
                // score1.textContent = clicks++;
            }

            memesBox = [];
            clicks = 0;
        } else {
            console.log("oops");
            mismatch++;
            score2.textContent = "Mismatches: " + mismatch;
            // need to find a way to increment by 1 vs 2 ^^

            // var clickedCards = document.getElementsByClassName('active');
            memesBox[0].classList.remove('active');
            memesBox[1].classList.remove('active');
            // score2.textContent =  clicks++;

            memesBox = [];
            clicks = 0;
        }
    }
};

/*------Game Logic------*/

// The timer 
let seconds = 0;
let timer = document.querySelector("#time");
let interval = setInterval(countdown, 1000)

const STARTING_TIME = 0;
let gameOver = true;

function countdown() {
    seconds++;
    // we want to round to nearest whole minute
    let minute = Math.floor(seconds / 60)
    let remainingSeconds = seconds - minute * 60
    // can also use % for the equation 
    timer.textContent = minute + " minutes " + remainingSeconds + " seconds ";
    // seconds++, 1000;
}

// function for resetting the game
function reset() {
    let winning = document.getElementsByClassName('matched');
    console.log("click", winning)
    while (winning[0]) {
        winning[0].classList.remove('matched')
    }
    // stopping the timer 
    clearInterval(interval);
    seconds = 0;
    interval = setInterval(countdown, 1000);
    // resetting the score
    score = 0;
    mismatch = 0;
    score1.textContent = "Matches " + score;
    score2.textContent = "Mismatches " + mismatch;
}




/*-----------Archives------------*/

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

//   let displayMeme = function() {
//     this.classList.toggle("front")
//     this.classList.toggle("back")
//     this.classList.toggle("disabled")

// function printScore(flip) {
//     if (winner === "Player One") {
//         // can use any form of math for point scale
//         playerOne.points = playerOne.points+1;
//         playerOneScore.innerText = playerOne.points;
//     }
//     if (winner === "Player Two") {
//         playerTwo.points = playerTwo.points+1;
//         playerTwoScore.innerText = playerTwo.points; 
//     }
// }

// const cards = document.querySelectorAll('.inner');
// function flipMeme() {
//     this.classList.toggle('flip');
// }

// cards.forEach(memes =>
//     card.addEventListener('click', function() {
//         console.log("")
//     }));

// function boxClick(e) {
//     console.log("You chose " + e.target.id);
//     let box = e.target.id;
//     let combo = true;
//     play(box);
//     for (let i = 0; i < winningCombo.length; i++) {
//         if (turn == 8) {
//             combo = false;
//         }
//     }
// }


// function for shuffling cards 
// function shuffleCards() {
//   var cards = $board.children();
//   while (cards.length) {
//     $board.append(cards.splice(Math.floor(Math.random() * cards.length), 1)[0]);
//   }
// }


// // Meant to change the display when selected
// function play(selectCard) {
//     let select = document.getElementsByClassName('inner');
//     if (select.style.display === "flex") {
//         select.style.display = 'block';
//     } else {
//         select.style.display = 'none';
//     }
// }
// let winning = [['00', '01'],
// ['03', '04'],
// ['05','06'],
// ['07','08'],
// ['09','10'],
// ['10','11'],
// ['12','13'],
// ['14','15']
// ];
// timer.textContent = countdown();

  // for (let i = 0; i < winning.length; i++) {
    //     console.log(winning[i], "removing this")
    //     winning[i].classList.remove('matched');
    // }

    // function playerChoice() {
//     turn++;
//     points.textContent = turn;
//     if(turn == 1) {
//         second = 0;
//         minute = 0;
//         countdown();
//     }
//     if (turn > 8 && turn < 16) {
//         for(i=0; i < 3; i++) {
//             if(i>1) {
//                 points.textContent = "Player One's Score " + playerChoice;
//             }
//         }
//     }
//     else if (turn > 17)
//     for(i=0; i < 3; i++) {
//             if(i>1) {
//                 points.textContent = "Player One's Score " + playerChoice;
//             }
//     }

// }
// playerChoice();

// Starting game function

// function startGame() {
//     let shuffleMemes = shuffle(memesBox);
//     for (i=0; i < shuffleMemes.length; i++);
//     cardElements[i].appendChild(shuffleMemes[i])
// }
// endGame function 

// Starts the game once the window is opened
// window.onload = startGame();

// Defining the players and their current move 
// let playerOne = {
//     points: 0,
//     currentChoice: null,
//     allChoices: []
// };

// let playerTwo = {
//     points: 0,
//     currentChoice: null,
//     allChoices: []
// };

// To allow player one to choose a card 


// To allow player two to choose a card 

// Stretch goals
// function shuffle() {
//     var i = 0,
//         j = 0,
//         temp = null

//     for (i = memesBox.length - 1; i > 0; i -- 1) {
//         j = Math.floor(Math.random() * (i + 1))
//         temp = memesBox[i]
//         memesBox[i] = memesBox[j]
//         memesBox[j] = temp
//     }
// }
// let currentIndex = memesBox.length, temporaryValue, randomIndex;
// while (currentIndex !==0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     temporaryValue = memesBox[currentIndex];
//     memesBox[currentIndex] = memesBox[randomIndex];
//     memesBox[randomIndex] = temporaryValue;

// function shuffle (memesBox) {
//     let randomMemeArray = []
//     let tracker = []
//     while (memesBox.length < 16) {
//      let index = Math.floor(Math.random() * array.length)
//       if(!tracker.includes(index)) {
//        randomMemeArray.push(memesBox[index])
//         tracker.push(index)
//         }
//     }
//     return memesBox;
//   }
 


// shuffles card with new page load 
// document.body.onload = shuffle(memesBox);

// function for ending the game 

// function endGame() {
//     if(memesBox.length == 16) {
//         clearInterval(interval);
//         printScore = timer.appendChild;
//     }
// }

