


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
  roundInputs1[currentRoundIndex-1] = { bid1, got1 };
}
function updateRoundData2(bid2, got2) {
  roundInputs2[currentRoundIndex - 1] = { bid2, got2};
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
restoreData1();
restoreData2();
  }
}
function restoreData1() {
  var roundData = roundInputs1[currentRoundIndex - 1];
  if (roundData) {
    var bid1 = roundData.bid1;
    var got1 = roundData.got1;
    document.querySelector('#bidinput1').value = bid1;
    document.querySelector('#gotinput1').value = got1;
    var score1 = getScore1(bid1, got1);
    document.querySelector('#scorenumber1').textContent = score1;
  }
  
}
function restoreData2() {
  var roundData = roundInputs2[currentRoundIndex - 1];
  if (roundData) {
    var bid2 = roundData.bid2;
    var got2 = roundData.got2;
    document.querySelector('#bidinput2').value = bid2;
    document.querySelector('#gotinput2').value = got2;
    var score2 = getScore2(bid2, got2);
    document.querySelector('#scorenumber2').textContent = score2;
  }
}
function resetBidAndGot() {
  if (!roundInputs1[currentRoundIndex - 1]) {
    document.querySelector('#bidinput1').value = '';
  document.querySelector('#gotinput1').value = '';
  document.querySelector('#bidinput2').value = '';
  document.querySelector('#gotinput2').value = '';
  document.querySelector('#scorenumber1').textContent = '';
  document.querySelector('#scorenumber2').textContent = '';
  } else {
    restoreData1();
    restoreData2();
  }
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


function updateName() {
  var name1 = document.querySelector('#nameinput1').value;
  var name2 = document.querySelector('#nameinput2').value;
  document.querySelector('#playername1').textContent = name1;
  document.querySelector('#playername2').textContent = name2;
} 
function initializePlayerName() {
  document.querySelector('#playername1').addEventListener('blur', updateName);
  document.querySelector('#playername2').addEventListener('blur', updateName);
}

document.addEventListener('DOMContentLoaded', initializePlayerName);
