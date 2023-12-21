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

function markOne() {
    if(counter === 0) {
        one.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        one = "x";
        counter = 1;
        checkWinCondition();
    } else {
        one.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        one = "o";
        counter = 0;
        checkWinCondition();
    }
}

function markTwo() {
    if(counter === 0) {
        two.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        two = "x";
        counter = 1;
        checkWinCondition();
    } else {
        two.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        two = "o";
        counter = 0;
        checkWinCondition();
    }
}

function markThree() {
    if(counter === 0) {
        three.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        three = "x";
        counter = 1;
        checkWinCondition();
    } else {
        three.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        three = "o";
        counter = 0;
        checkWinCondition();
    }
}

function markFour() {
    if(counter === 0) {
        four.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        four = "x";
        counter = 1;
        checkWinCondition();
    } else {
        four.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        four = "o";
        counter = 0;
        checkWinCondition();
    }
}

function markFive() {
    if(counter === 0) {
        five.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        five = "x";
        counter = 1;
        checkWinCondition();
    } else {
        five.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        five = "o";
        counter = 0;
        checkWinCondition();
    }
}

function markSix() {
    if(counter === 0) {
        six.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        six = "x";
        counter = 1;
        checkWinCondition();
    } else {
        six.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        six = "o";
        counter = 0;
        checkWinCondition();
    }
}

function markSeven() {
    if(counter === 0) {
        seven.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        seven = "x";
        counter = 1;
        checkWinCondition();
    } else {
        seven.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        seven = "o";
        counter = 0;
        checkWinCondition();
    }
}

function markEight() {
    if(counter === 0) {
        eight.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        eight = "x";
        counter = 1;
        checkWinCondition();
    } else {
        eight.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        eight = "o";
        counter = 0;
        checkWinCondition();
    }
}

function markNine() {
    if(counter === 0) {
        nine.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        nine = "x";
        counter = 1;
        checkWinCondition();
    } else {
        nine.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        nine = "o";
        counter = 0;
        checkWinCondition();
    }
}

function checkWinCondition() {
    if(one === 'x' && two === 'x' && three === 'x'){
        document.getElementById('information-container').innerHTML = 'X WINS!'
    } else if (one === 'o' && two === 'o' && three === 'o') {
        document.getElementById('information-container').innerHTML = 'O WINS!'
    } else if(four === 'x' && five === 'x' && six === 'x'){
        document.getElementById('information-container').innerHTML = 'X WINS!'
    } else if (four === 'o' && five === 'o' && six === 'o') {
        document.getElementById('information-container').innerHTML = 'O WINS!'
    } else if(seven === 'x' && eight === 'x' && nine === 'x'){
        document.getElementById('information-container').innerHTML = 'X WINS!'
    } else if (seven === 'o' && eight === 'o' && nine === 'o') {
        document.getElementById('information-container').innerHTML = 'O WINS!'
    } else if(one === 'x' && four === 'x' && seven === 'x'){
        document.getElementById('information-container').innerHTML = 'X WINS!'
    } else if (one === 'o' && four === 'o' && seven === 'o') {
        document.getElementById('information-container').innerHTML = 'O WINS!'
    } else if(two === 'x' && five === 'x' && eight === 'x'){
        document.getElementById('information-container').innerHTML = 'X WINS!'
    } else if (two === 'o' && five === 'o' && eight === 'o') {
        document.getElementById('information-container').innerHTML = 'O WINS!'
    } else if(three === 'x' && six === 'x' && nine === 'x'){
        document.getElementById('information-container').innerHTML = 'X WINS!'
    } else if (three === 'o' && six === 'o' && nine === 'o') {
        document.getElementById('information-container').innerHTML = 'O WINS!'
    } else if (one === 'x' && five === 'x' && nine === 'x') {
        document.getElementById('information-container').innerHTML = 'X WINS!'
    } else if (one === 'o' && five === 'o' && nine === 'o') {
        document.getElementById('information-container').innerHTML = 'O WINS!'
    } else if (three === 'x' && five === 'x' && seven === 'x') {
        document.getElementById('information-container').innerHTML = 'X WINS!'
    } else if (three === 'o' && five === 'o' && seven === 'o') {
        document.getElementById('information-container').innerHTML = 'O WINS!'
    }
}


one.addEventListener('click', markOne, checkWinCondition);
two.addEventListener('click', markTwo, checkWinCondition);
three.addEventListener('click', markThree, checkWinCondition);
four.addEventListener('click', markFour, checkWinCondition);
five.addEventListener('click', markFive, checkWinCondition);
six.addEventListener('click', markSix, checkWinCondition);
seven.addEventListener('click', markSeven, checkWinCondition);
eight.addEventListener('click', markEight, checkWinCondition);
nine.addEventListener('click', markNine, checkWinCondition);
