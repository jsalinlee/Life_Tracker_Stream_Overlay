var STARTING_LIFE = 20;
var player1LifeTotal, player2LifeTotal;
var socket = io("http://localhost:8000");

var updateLifeTotals = function() {
  document.getElementById("player-1-life-total").innerText =
    "Player 1: " + player1LifeTotal;
  document.getElementById("player-2-life-total").innerText =
    "Player 2: " + player2LifeTotal;
};

var resetGame = function() {
  player1LifeTotal = STARTING_LIFE;
  localStorage.player1LifeTotal = Number(player1LifeTotal);
  player2LifeTotal = STARTING_LIFE;
  localStorage.player2LifeTotal = Number(player2LifeTotal);
};

(function() {
  if (!localStorage.player1LifeTotal) {
    resetGame();
  } else {
    player1LifeTotal = Number(localStorage.player1LifeTotal);
    player2LifeTotal = Number(localStorage.player2LifeTotal);
  }
  updateLifeTotals();
})();

socket.on("player1Gain1", function() {
  player1LifeTotal += 1;
  localStorage.player1LifeTotal = player1LifeTotal;
  updateLifeTotals();
});

socket.on("player1Lose1", function() {
  player1LifeTotal -= 1;
  localStorage.player1LifeTotal = player1LifeTotal;
  updateLifeTotals();
});

socket.on("player2Gain1", function() {
  player2LifeTotal += 1;
  localStorage.player2LifeTotal = player2LifeTotal;
  updateLifeTotals();
});

socket.on("player2Lose1", function() {
  player2LifeTotal -= 1;
  localStorage.player2LifeTotal = player2LifeTotal;
  updateLifeTotals();
});

socket.on("resetGame", function() {
  resetGame();
  updateLifeTotals();
});
