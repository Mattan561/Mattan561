


function getScore1(bid1, got1) {
  var score1 = 0;
  if (got1 == bid1) {
    score1 = 10 + got1;
  } else {
    score1 = got1;
  }
  return score1;
}

var numberOfRounds = 20;
let roundInputs1 = [];


/*
let roundlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
*/
let currentRoundIndex = 0;


function updateRoundScore(event) {
  var bid1 = parseInt(document.querySelector('#bidinput1').value);
  var got1 = parseInt(document.querySelector('#gotinput1').value);
  var score1 = getScore1(bid1, got1);
  document.querySelector('#scorenumber1').textContent = score1;
  updateRoundData1(bid1, got1);
}

document.querySelector('#scorenumber1').addEventListener('change', updateTotalScore);
document.querySelector('#gotinput1').addEventListener('blur', updateRoundScore);

function updateTotalScore(){
  var total1 = calculateTotal1();
  document.querySelector('#totalnumber1').textContent = total1;
}

function calculateTotal1() {
  var total1 = 0;
  for (var i = 0; i < numberOfRounds; i++) {
    var roundData = roundInputs1[i];
    if (roundData) {
      total1 += getScore1(roundData.bid1, roundData.got1);
    }
  }
  return total1;
}

function updateRoundData1(bid1, got1) {
  roundInputs1[currentRoundIndex] = { bid1, got1 };
}

function updateRoundNumber() {
  document.querySelector('#roundnumber').textContent = currentRoundIndex+1;
  resetBidAndGot();
}

function handleRightButtonClick() {
  if (currentRoundIndex < numberOfRounds - 1) {
    currentRoundIndex++;
    updateRoundNumber();
  }
}

function handleLeftButtonClick() {
  if (currentRoundIndex > 0) {
    currentRoundIndex--;
    updateRoundNumber();
    restoreData1();
  }
}
function restoreData1() {
  var roundData = roundInputs1[currentRoundIndex];
  if (roundData) {
    var bid1 = roundData.bid1;
    var got1 = roundData.got1;
    document.querySelector('#bidinput1').value = bid1;
    document.querySelector('#gotinput1').value = got1;
    var score1 = getScore1(bid1, got1);
    document.querySelector('#scorenumber1').textContent = score1;
  }
  
}

function resetBidAndGot() {
  if (!roundInputs1[currentRoundIndex]) {
    document.querySelector('#bidinput1').value = '';
    document.querySelector('#gotinput1').value = '';
    document.querySelector('#scorenumber1').textContent = '';
  } else {
    restoreData1();
  }
}


function initialize() {
  document.querySelector('#gotinput1').addEventListener('blur', updateTotalScore);
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
