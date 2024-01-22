


function getScore1(bid1, got1) {
  var score1 = 0;
  if (got1 == bid1) {
    score1 = 10 + got1;
  } else {
    score1 = got1;
  }
  return score1;
}

function getScore2(bid2, got2) {
  var score2 = 0;
  if (got2 == bid2) {
    score2 = 10 + got2;
  } else {
    score2 = got2;
  }
  return score2;
}

let roundlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let currentRoundIndex = 0;

let roundInputs1 = [];
let roundInputs2 = [];

function updateScore1(event) {
  var bid1 = parseInt(document.querySelector('#bidinput1').value);
  var got1 = parseInt(document.querySelector('#gotinput1').value);
  var score1 = getScore1(bid1, got1);
  document.querySelector('#scorenumber1').textContent = score1;
  updateRoundData1(bid1, got1);
}

function updateScore2(event) {
  var bid2 = parseInt(document.querySelector('#bidinput2').value);
  var got2 = parseInt(document.querySelector('#gotinput2').value);
  var score2 = getScore2(bid2, got2);
  document.querySelector('#scorenumber2').textContent = score2;
  updateRoundData2(bid2, got2);
}

function updateRoundData1(bid1, got1) {
  roundInputs1[currentRoundIndex] = { bid1, got1 };
}
function updateRoundData2(bid2, got2) {
  roundInputs2[currentRoundIndex] = { bid2, got2};
}
function updateRoundNumber() {
  document.querySelector('#roundnumber').textContent = roundlist[currentRoundIndex];
  resetBidAndGot();
}

function handleRightButtonClick() {
  if (currentRoundIndex < roundlist.length - 1) {
    currentRoundIndex++;
    updateRoundNumber();
  }
}

function handleLeftButtonClick() {
  if (currentRoundIndex > 0) {
    currentRoundIndex--;
    updateRoundNumber();

  }
}

function resetBidAndGot() {
  document.querySelector('#bidinput1').value = '';
  document.querySelector('#gotinput1').value = '';
  document.querySelector('#bidinput2').value = '';
  document.querySelector('#gotinput2').value = '';
  document.querySelector('#scorenumber1').textContent = '';
  document.querySelector('#scorenumber2').textContent = '';
}

function initialize() {
  document.querySelector('#gotinput1').addEventListener('blur', updateScore1);
  document.querySelector('#gotinput2').addEventListener('blur', updateScore2);
}

document.addEventListener('DOMContentLoaded', initialize);

function initializeButtons() {
  document.querySelector('.rightarrow').addEventListener('click', handleRightButtonClick);
  document.querySelector('.leftarrow').addEventListener('click', handleLeftButtonClick);
}

document.addEventListener('DOMContentLoaded', initializeButtons);
