var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");

let counter = 0;
let turn = 1;

function markOne() {
    if(counter === 0) {
        one.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        one = "x";
        counter = 1;
        oNext();
        checkWinCondition();
    } else if (counter === 1) {
        one.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        one = "o";
        counter = 0;
        xNext();
        checkWinCondition();
    }
}

function markTwo() {
    if(counter === 0) {
        two.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        two = "x";
        counter = 1;
        oNext();
        checkWinCondition();
    } else if (counter === 1){
        two.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        two = "o";
        counter = 0;
        xNext();
        checkWinCondition();
    }
}

function markThree() {
    if(counter === 0) {
        three.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        three = "x";
        counter = 1;
        oNext();
        checkWinCondition();
    } else if (counter === 1){
        three.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        three = "o";
        counter = 0;
        xNext();
        checkWinCondition();
    }
}

function markFour() {
    if(counter === 0) {
        four.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        four = "x";
        counter = 1;
        oNext();
        checkWinCondition();
    } else if (counter === 1){
        four.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        four = "o";
        counter = 0;
        xNext();
        checkWinCondition();
    }
}

function markFive() {
    if(counter === 0) {
        five.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        five = "x";
        counter = 1;
        oNext();
        checkWinCondition();
    } else if (counter === 1){
        five.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        five = "o";
        counter = 0;
        xNext();
        checkWinCondition();
    }
}

function markSix() {
    if(counter === 0) {
        six.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        six = "x";
        counter = 1;
        oNext();
        checkWinCondition();
    } else if (counter === 1){
        six.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        six = "o";
        counter = 0;
        xNext();
        checkWinCondition();
    }
}

function markSeven() {
    if(counter === 0) {
        seven.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        seven = "x";
        counter = 1;
        oNext();
        checkWinCondition();
    } else if (counter === 1){
        seven.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        seven = "o";
        counter = 0;
        xNext();
        checkWinCondition();
    }
}

function markEight() {
    if(counter === 0) {
        eight.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        eight = "x";
        counter = 1;
        oNext();
        checkWinCondition();
    } else if (counter === 1){
        eight.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        eight = "o";
        counter = 0;
        xNext();
        checkWinCondition();
    }
}

function markNine() {
    if(counter === 0) {
        nine.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        nine = "x";
        counter = 1;
        oNext();
        checkWinCondition();
    } else if (counter === 1){
        nine.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        nine = "o";
        counter = 0;
        xNext();
        checkWinCondition();
    }
}

function checkWinCondition() {
    if(one === 'x' && two === 'x' && three === 'x'){
        document.getElementById('information-container').innerHTML = '<p>X WINS!</p> <a href="./index.html">Play Again!</a>';
        removeMarker();
    } else if (one === 'o' && two === 'o' && three === 'o') {
        document.getElementById('information-container').innerHTML = '<p>O WINS!</p> <a href="./index.html">Play Again!</a>';
        removeMarker();
    } else if(four === 'x' && five === 'x' && six === 'x'){
        document.getElementById('information-container').innerHTML = '<p>X WINS!</p> <a href="./index.html">Play Again!</a>';
        removeMarker();
    } else if (four === 'o' && five === 'o' && six === 'o') {
        document.getElementById('information-container').innerHTML = '<p>O WINS!</p> <a href="./index.html">Play Again!</a>'
    } else if(seven === 'x' && eight === 'x' && nine === 'x'){
        document.getElementById('information-container').innerHTML = '<p>X WINS!</p> <a href="./index.html">Play Again!</a>';
        removeMarker();
    } else if (seven === 'o' && eight === 'o' && nine === 'o') {
        document.getElementById('information-container').innerHTML = '<p>O WINS!</p> <a href="./index.html">Play Again!</a>';
        removeMarker();
    } else if(one === 'x' && four === 'x' && seven === 'x'){
        document.getElementById('information-container').innerHTML = '<p>X WINS!</p> <a href="./index.html">Play Again!</a>';
        removeMarker();
    } else if (one === 'o' && four === 'o' && seven === 'o') {
        document.getElementById('information-container').innerHTML = '<p>O WINS!</p> <a href="./index.html">Play Again!</a>';
        removeMarker();
    } else if(two === 'x' && five === 'x' && eight === 'x'){
        document.getElementById('information-container').innerHTML = '<p>X WINS!</p> <a href="./index.html">Play Again!</a>';
        removeMarker();
    } else if (two === 'o' && five === 'o' && eight === 'o') {
        document.getElementById('information-container').innerHTML = '<p>O WINS!</p> <a href="./index.html">Play Again!</a>';
        removeMarker();
    } else if(three === 'x' && six === 'x' && nine === 'x'){
        document.getElementById('information-container').innerHTML = '<p>X WINS!</p> <a href="./index.html">Play Again!</a>';
        removeMarker();
    } else if (three === 'o' && six === 'o' && nine === 'o') {
        document.getElementById('information-container').innerHTML = '<p>O WINS!</p> <a href="./index.html">Play Again!</a>';
        removeMarker();
    } else if (one === 'x' && five === 'x' && nine === 'x') {
        document.getElementById('information-container').innerHTML = '<p>X WINS!</p> <a href="./index.html">Play Again!</a>';
        removeMarker();
    } else if (one === 'o' && five === 'o' && nine === 'o') {
        document.getElementById('information-container').innerHTML = '<p>O WINS!</p> <a href="./index.html">Play Again!</a>';
        removeMarker();
    } else if (three === 'x' && five === 'x' && seven === 'x') {
        document.getElementById('information-container').innerHTML = '<p>X WINS!</p> <a href="./index.html">Play Again!</a>';
        removeMarker();
    } else if (three === 'o' && five === 'o' && seven === 'o') {
        document.getElementById('information-container').innerHTML = '<p>O WINS!</p> <a href="./index.html">Play Again!</a>';
        removeMarker();
    } else if (turn === 9) {
        document.getElementById('information-container').innerHTML = '<p>DRAW GAME!</p> <a href="./index.html">Play Again!</a>';
        removeMarker();
    }
    else {
        turn++;
    }
}

function removeMarker() {
    counter = 2;
}

function xNext() {
    document.getElementById('information-container').innerHTML = `<p>X's Turn!</p>`;
}

function oNext() {
    document.getElementById('information-container').innerHTML = `<p>O's Turn!</p>`;
}

one.addEventListener('click', markOne);
two.addEventListener('click', markTwo);
three.addEventListener('click', markThree);
four.addEventListener('click', markFour);
five.addEventListener('click', markFive);
six.addEventListener('click', markSix);
seven.addEventListener('click', markSeven);
eight.addEventListener('click', markEight);
nine.addEventListener('click', markNine);
