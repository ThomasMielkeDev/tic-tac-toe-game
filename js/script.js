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
let firstTurn = "x";
let xWins = 0;
let oWins = 0;
let draws = 0;

function markOne() {
  if (counter === 0) {
    one.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
    one.removeEventListener('click', markOne);
    one = 'x';
    counter = 1;
    oNext();
    checkWinCondition();
  } else if (counter === 1) {
    one.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
    one.removeEventListener('click', markOne);
    one = 'o';
    counter = 0;
    xNext();
    checkWinCondition();
  }
}

function markTwo() {
  if (counter === 0) {
    two.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
    two.removeEventListener('click', markTwo);
    two = 'x';
    counter = 1;
    oNext();
    checkWinCondition();
  } else if (counter === 1) {
    two.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
    two.removeEventListener('click', markTwo);
    two = 'o';
    counter = 0;
    xNext();
    checkWinCondition();
  }
}

function markThree() {
  if (counter === 0) {
    three.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
    three.removeEventListener('click', markThree);
    three = 'x';
    counter = 1;
    oNext();
    checkWinCondition();
  } else if (counter === 1) {
    three.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
    three = removeEventListener('click', markThree);
    three = 'o';
    counter = 0;
    xNext();
    checkWinCondition();
  }
}

function markFour() {
  if (counter === 0) {
    four.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
    four.removeEventListener('click', markFour);
    four = 'x';
    counter = 1;
    oNext();
    checkWinCondition();
  } else if (counter === 1) {
    four.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
    four.removeEventListener('click', markFour);
    four = 'o';
    counter = 0;
    xNext();
    checkWinCondition();
  }
}

function markFive() {
  if (counter === 0) {
    five.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
    five.removeEventListener('click', markFive);
    five = 'x';
    counter = 1;
    oNext();
    checkWinCondition();
  } else if (counter === 1) {
    five.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
    five.removeEventListener('click', markFive);
    five = 'o';
    counter = 0;
    xNext();
    checkWinCondition();
  }
}

function markSix() {
  if (counter === 0) {
    six.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
    six.removeEventListener('click', markSix);
    six = 'x';
    counter = 1;
    oNext();
    checkWinCondition();
  } else if (counter === 1) {
    six.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
    six.removeEventListener('click', markSix);
    six = 'o';
    counter = 0;
    xNext();
    checkWinCondition();
  }
}

function markSeven() {
  if (counter === 0) {
    seven.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
    seven.removeEventListener('click', markSeven);
    seven = 'x';
    counter = 1;
    oNext();
    checkWinCondition();
  } else if (counter === 1) {
    seven.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
    seven.removeEventListener('click', markSeven);
    seven = 'o';
    counter = 0;
    xNext();
    checkWinCondition();
  }
}

function markEight() {
  if (counter === 0) {
    eight.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
    eight.removeEventListener('click', markEight);
    eight = 'x';
    counter = 1;
    oNext();
    checkWinCondition();
  } else if (counter === 1) {
    eight.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
    eight.removeEventListener('click', markEight);
    eight = 'o';
    counter = 0;
    xNext();
    checkWinCondition();
  }
}

function markNine() {
  if (counter === 0) {
    nine.innerHTML = '<img src="./images/x-image.png" alt="x-image"></img>';
    nine.removeEventListener('click', markNine);
    nine = 'x';
    counter = 1;
    oNext();
    checkWinCondition();
  } else if (counter === 1) {
    nine.innerHTML = '<img src="./images/o-image.png" alt="x-image"></img>';
    nine.removeEventListener('click', markNine);
    nine = 'o';
    counter = 0;
    xNext();
    checkWinCondition();
  }
}

function checkWinCondition() {
  if (one === "x" && two === "x" && three === "x") {
    document.getElementById("information-container").innerHTML =
      '<p>X Wins!</p> <button id="new-game-button">Play Again!</button>';
    document.getElementById("new-game-button").addEventListener("click", newGame);
    addXScore();
    removeMarker();
  } else if (one === "o" && two === "o" && three === "o") {
    document.getElementById("information-container").innerHTML =
      '<p>O Wins!</p> <button id="new-game-button">Play Again!</button>';
    document.getElementById("new-game-button").addEventListener("click", newGame);
    addOScore();
    removeMarker();
  } else if (four === "x" && five === "x" && six === "x") {
    document.getElementById("information-container").innerHTML =
      '<p>X Wins!</p> <button id="new-game-button">Play Again!</button>';
    document.getElementById("new-game-button").addEventListener("click", newGame);
    addXScore();
    removeMarker();
  } else if (four === "o" && five === "o" && six === "o") {
    document.getElementById("information-container").innerHTML =
      '<p>O Wins!</p> <button id="new-game-button">Play Again!</button>';
    document.getElementById("new-game-button").addEventListener("click", newGame);
    addOScore();
    removeMarker();
  } else if (seven === "x" && eight === "x" && nine === "x") {
    document.getElementById("information-container").innerHTML =
      '<p>X Wins!</p> <button id="new-game-button">Play Again!</button>';
    document.getElementById("new-game-button").addEventListener("click", newGame);
    addXScore();
    removeMarker();
  } else if (seven === "o" && eight === "o" && nine === "o") {
    document.getElementById("information-container").innerHTML =
      '<p>O Wins!</p> <button id="new-game-button">Play Again!</button>';
    document.getElementById("new-game-button").addEventListener("click", newGame);
    addOScore();
    removeMarker();
  } else if (one === "x" && four === "x" && seven === "x") {
    document.getElementById("information-container").innerHTML =
      '<p>X Wins!</p> <button id="new-game-button">Play Again!</button>';
    document.getElementById("new-game-button").addEventListener("click", newGame);
    addXScore();
    removeMarker();
  } else if (one === "o" && four === "o" && seven === "o") {
    document.getElementById("information-container").innerHTML =
      '<p>O Wins!</p> <button id="new-game-button">Play Again!</button>';
    document.getElementById("new-game-button").addEventListener("click", newGame);
    addOScore();
    removeMarker();
  } else if (two === "x" && five === "x" && eight === "x") {
    document.getElementById("information-container").innerHTML =
      '<p>X Wins!</p> <button id="new-game-button">Play Again!</button>';
    document.getElementById("new-game-button").addEventListener("click", newGame);
    addXScore();
    removeMarker();
  } else if (two === "o" && five === "o" && eight === "o") {
    document.getElementById("information-container").innerHTML =
      '<p>O Wins!</p> <button id="new-game-button">Play Again!</button>';
    document.getElementById("new-game-button").addEventListener("click", newGame);
    addOScore();
    removeMarker();
  } else if (three === "x" && six === "x" && nine === "x") {
    document.getElementById("information-container").innerHTML =
      '<p>X Wins!</p> <button id="new-game-button">Play Again!</button>';
    document.getElementById("new-game-button").addEventListener("click", newGame);
    addXScore();
    removeMarker();
  } else if (three === "o" && six === "o" && nine === "o") {
    document.getElementById("information-container").innerHTML =
      '<p>O Wins!</p> <button id="new-game-button">Play Again!</button>';
    document.getElementById("new-game-button").addEventListener("click", newGame);
    addOScore();
    removeMarker();
  } else if (one === "x" && five === "x" && nine === "x") {
    document.getElementById("information-container").innerHTML =
      '<p>X Wins!</p> <button id="new-game-button">Play Again!</button>';
    document.getElementById("new-game-button").addEventListener("click", newGame);
    addXScore();
    removeMarker();
  } else if (one === "o" && five === "o" && nine === "o") {
    document.getElementById("information-container").innerHTML =
      '<p>O Wins!</p> <button id="new-game-button">Play Again!</button>';
    document.getElementById("new-game-button").addEventListener("click", newGame);
    addOScore();
    removeMarker();
  } else if (three === "x" && five === "x" && seven === "x") {
    document.getElementById("information-container").innerHTML =
      '<p>X Wins!</p> <button id="new-game-button">Play Again!</button>';
    document.getElementById("new-game-button").addEventListener("click", newGame);
    addXScore();
    removeMarker();
  } else if (three === "o" && five === "o" && seven === "o") {
    document.getElementById("information-container").innerHTML =
      '<p>O Wins!</p> <button id="new-game-button">Play Again!</button>';
    document.getElementById("new-game-button").addEventListener("click", newGame);
    addOScore();
    removeMarker();
  } else if (turn === 9) {
    document.getElementById("information-container").innerHTML =
      '<p>DRAW GAME!</p> <button id="new-game-button">Play Again!</button>';
    document.getElementById("new-game-button").addEventListener("click", newGame);
    addDraw();
    removeMarker();
  } else {
    turn++;
  }
}

function removeMarker() {
  counter = 2;
}

function xNext() {
  document.getElementById(
    "information-container"
  ).innerHTML = `<p>X's Turn!</p>`;
}

function oNext() {
  document.getElementById(
    "information-container"
  ).innerHTML = `<p>O's Turn!</p>`;
}

function addXScore() {
  xWins++;
  document.getElementById('x-wins-score').innerHTML = xWins;
}

function addOScore() {
  oWins++;
  document.getElementById('o-wins-score').innerHTML = oWins;
}

function addDraw() {
  draws++;
  document.getElementById('draws-score').innerHTML = draws;
}


function newGame() {

  one = document.getElementById("one");
  two = document.getElementById("two");
  three = document.getElementById("three");
  four = document.getElementById("four");
  five = document.getElementById("five");
  six = document.getElementById("six");
  seven = document.getElementById("seven");
  eight = document.getElementById("eight");
  nine = document.getElementById("nine");

  one.innerHTML = "";
  two.innerHTML = "";
  three.innerHTML = "";
  four.innerHTML = "";
  five.innerHTML = "";
  six.innerHTML = "";
  seven.innerHTML = "";
  eight.innerHTML = "";
  nine.innerHTML = "";

  one.addEventListener("click", markOne);
  two.addEventListener("click", markTwo);
  three.addEventListener("click", markThree);
  four.addEventListener("click", markFour);
  five.addEventListener("click", markFive);
  six.addEventListener("click", markSix);
  seven.addEventListener("click", markSeven);
  eight.addEventListener("click", markEight);
  nine.addEventListener("click", markNine);

  turn = 1;

  if (firstTurn === "x") {
    document.getElementById("information-container").innerHTML =
      "<p>New Game, O goes first!</p>";
    counter = 1;
    firstTurn = "o";
  } else if (firstTurn === "o") {
    document.getElementById("information-container").innerHTML =
      "<p>New Game, X goes first!</p>";
    counter = 0;
    firstTurn = "x";
  }
}

one.addEventListener("click", markOne);
two.addEventListener("click", markTwo);
three.addEventListener("click", markThree);
four.addEventListener("click", markFour);
five.addEventListener("click", markFive);
six.addEventListener("click", markSix);
seven.addEventListener("click", markSeven);
eight.addEventListener("click", markEight);
nine.addEventListener("click", markNine);