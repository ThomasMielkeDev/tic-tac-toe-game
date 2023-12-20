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
    } else {
        one.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        one = "o";
        counter = 0;
    }
}

function markTwo() {
    if(counter === 0) {
        two.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        two = "x";
        counter = 1;
    } else {
        two.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        two = "o";
        counter = 0;
    }
}

function markThree() {
    if(counter === 0) {
        three.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        three = "x";
        counter = 1;
    } else {
        three.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        three = "o";
        counter = 0;
    }
}

function markFour() {
    if(counter === 0) {
        four.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        four = "x";
        counter = 1;
    } else {
        four.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        four = "o";
        counter = 0;
    }
}

function markFive() {
    if(counter === 0) {
        five.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        five = "x";
        counter = 1;
    } else {
        five.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        five = "o";
        counter = 0;
    }
}

function markSix() {
    if(counter === 0) {
        six.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        six = "x";
        counter = 1;
    } else {
        six.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        six = "o";
        counter = 0;
    }
}

function markSeven() {
    if(counter === 0) {
        seven.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        seven = "x";
        counter = 1;
    } else {
        seven.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        seven = "o";
        counter = 0;
    }
}

function markEight() {
    if(counter === 0) {
        eight.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        eight = "x";
        counter = 1;
    } else {
        eight.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        eight = "o";
        counter = 0;
    }
}

function markNine() {
    if(counter === 0) {
        nine.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
        nine = "x";
        counter = 1;
    } else {
        nine.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
        nine = "o";
        counter = 0;
    }
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
