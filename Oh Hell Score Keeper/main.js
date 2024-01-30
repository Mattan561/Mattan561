


function getScore1(bid1, got1) {
  var score1 = 0;
  if (got1 == bid1) {
    score1 = 10 + got1;
  } else {
    score1 = got1;
  }
  return score1;
}

var numberOfPlayers = 1;
var numberOfRounds = calculateNumberOfRounds();
let roundInputs1 = [];

function calculateNumberOfRounds(numberOfPlayers) {
  return (Math.floor(51 / (numberOfPlayers))*2)-1;
}

function updateNumberOfRounds(playerNumber) {
  numberOfRounds = calculateNumberOfRounds(playerNumber);
  document.querySelector('#roundtotal').textContent = numberOfRounds;
}


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
  document.querySelector('#playername1').textContent = name1;
} 
function initializePlayerName() {
  document.querySelector('#playername1').addEventListener('blur', updateName);
}

document.addEventListener('DOMContentLoaded', initializePlayerName);

function removePlayer(){
  var playersContainer = document.querySelector('#playerscontainer');
  var players = document.querySelectorAll('.player');
  var lastPlayer = players[players.length - 1];
  playersContainer.removeChild(lastPlayer);
  numberOfPlayers--;
  updateNumberOfRounds(numberOfPlayers);
}

function addPlayer(event) {
  if (numberOfPlayers >= 12)
    return;
  var playerNumber = numberOfPlayers++;
  var playerscontainer = document.querySelector('#playerscontainer');
  var player = document.createElement('div');
  player.classList.add('player');
  playerscontainer.appendChild(player);
  updateNumberOfRounds(numberOfPlayers);

  var nameandtotal = document.createElement('div');
  nameandtotal.classList.add('nameandtotal');

  var playername = document.createElement('input');
  playername.classList.add('playername');
  playername.type = 'text';
  playername.id = 'playername' + playerNumber;

  var totalall = document.createElement('div');
  totalall.classList.add('totalall');

  var totalhardcode = document.createElement('div');
  totalhardcode.classList.add('totalhardcode');
  totalhardcode.textContent = 'total:';

  var totalnumber = document.createElement('div');
  totalnumber.classList.add('totalnumber');
  totalnumber.id = 'totalnumber' + playerNumber;

  totalall.appendChild(totalhardcode);
  totalall.appendChild(totalnumber);
  nameandtotal.appendChild(playername);
  nameandtotal.appendChild(totalall);
  player.appendChild(nameandtotal);

  var input = document.createElement('div');
  input.classList.add('input');
  player.appendChild(input);

  var bidall = document.createElement('div');
  bidall.classList.add('bidall');
  input.appendChild(bidall);

  var bidhardcode = document.createElement('div');
  bidhardcode.classList.add('bidhardcode');
  bidhardcode.textContent = 'Bid:';
  bidall.appendChild(bidhardcode);

  var bidinput = document.createElement('input');
  bidinput.classList.add('bidinput');
  bidinput.type = 'text';
  bidinput.id = 'bidinput' + playerNumber;
  bidall.appendChild(bidinput);

  var gotall = document.createElement('div');
  gotall.classList.add('gotall');
  input.appendChild(gotall);

  var gothardcode = document.createElement('div');
  gothardcode.classList.add('gothardcode');
  gothardcode.textContent = 'Got:';
  gotall.appendChild(gothardcode);

  var gotinput = document.createElement('input');
  gotinput.classList.add('gotinput');
  gotinput.type = 'text';
  gotinput.id = 'gotinput' + playerNumber;
  gotall.appendChild(gotinput);

  var scoreall = document.createElement('div');
  scoreall.classList.add('scoreall');
  input.appendChild(scoreall);

  var score = document.createElement('div');
  score.classList.add('score');
  score.textContent = 'Score:';
  scoreall.appendChild(score);

  var scorenumber = document.createElement('div');
  scorenumber.classList.add('scorenumber');
  scorenumber.id = 'scorenumber' + playerNumber;
  scorenumber.textContent = '-';
  scoreall.appendChild(scorenumber);

  document.querySelector('#gotinput' + playerNumber).addEventListener('blur', updateTotalScore);
  document.querySelector('#scorenumber' + playerNumber).addEventListener('change', updateTotalScore);
  document.querySelector('#bidinput' + playerNumber).addEventListener('blur', updateRoundScore);
  document.querySelector('#gotinput' + playerNumber).addEventListener('blur', updateRoundScore);
}

document.querySelector('#addplayerbutton').addEventListener('click', addPlayer);
document.querySelector('#removeplayerbutton').addEventListener('click', removePlayer);

