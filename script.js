let player1 = "player-1";
let player2 = "player-2";
let currentPlayer = player1;
let play = "";

var currentScore1 = 0;
var currentScore2 = 0;
var globalScore1 = 0;
var globalScore2 = 0;

const rollDice = () => {
  if (play == "") {
    alert("Vous devez d'abord lancer une partie");
    return;
  }
  if (play == "stop") {
    alert(
      "Cette partie est terminée. Vous pouvez lancer une nouvelle partie afin de rejouer."
    );
    return;
  }
  var deValue = document.getElementById("de-value");
  deValue.innerHTML = "";
  deValue.innerHTML = Math.floor(Math.random() * 6) + 1;

  if (currentPlayer == player1) {
    currentScore1 += parseInt(deValue.innerHTML);
  } else {
    currentScore2 += parseInt(deValue.innerHTML);
  }
  updateScore();

  if (deValue.innerHTML == "1") {
    endOfTour();
  }
};

const showPlayer = () => {
  if (globalScore2 >= 100 || globalScore1 >= 100) {
    return;
  }
  if (currentPlayer == player1) {
    document
      .getElementById("active-player-" + player1)
      .classList.remove("d-none");
    document.getElementById("active-player-" + player2).classList.add("d-none");
    document.getElementById("name-" + player1).style.fontWeight = "bold";
    document.getElementById("name-" + player2).style.fontWeight = "normal";
    document.getElementById("name-" + player2).classList.remove("text-red");
    document.getElementById("name-" + player1).classList.add("text-red");
  } else {
    document
      .getElementById("active-player-" + player2)
      .classList.remove("d-none");
    document.getElementById("active-player-" + player1).classList.add("d-none");
    document.getElementById("name-" + player1).style.fontWeight = "normal";
    document.getElementById("name-" + player2).style.fontWeight = "bold";
    document.getElementById("name-" + player2).classList.add("text-red");
    document.getElementById("name-" + player1).classList.remove("text-red");
  }
};

const startNewGame = () => {
  play = "play";
  currentPlayer = player1;
  currentScore1 = 0;
  currentScore2 = 0;
  globalScore1 = 0;
  globalScore2 = 0;
  updateScore();
  document.getElementById("de-value").innerHTML = "";
  showPlayer();
};

const hold = () => {
  if (play == "") {
    alert("Vous devez d'abord lancer une partie");
    return;
  }
  if (play == "stop") {
    alert(
      "Cette partie est terminée. Vous pouvez lancer une nouvelle partie afin de rejouer."
    );
    return;
  }
  if (document.getElementById("de-value").innerHTML == "") {
    alert("Veuillez d'abord lancer le dé.");
    return;
  }
  if (currentPlayer == player1) {
    globalScore1 += currentScore1;
    currentScore1 = 0;
    currentPlayer = player2;
    alert("Votre score est mis à jour, c'est maintenant au tour du joueur 2.");
  } else {
    globalScore2 += currentScore2;
    currentScore2 = 0;
    currentPlayer = player1;
    alert("Votre score est mis à jour, c'est maintenant au tour du joueur 1.");
  }
  updateScore();
  showPlayer();
  document.getElementById("de-value").innerHTML = "";
};

const updateScore = () => {
  document.getElementById("current-score-" + player1).innerHTML = currentScore1;
  document.getElementById("current-score-" + player2).innerHTML = currentScore2;
  document.getElementById("global-score-" + player1).innerHTML = globalScore1;
  document.getElementById("global-score-" + player2).innerHTML = globalScore2;
  if (globalScore1 >= 100) {
    alert("Bravo le joueur 1 remporte la partie !");
    play = "stop";
  } else if (globalScore2 >= 100) {
    alert("Bravo le joueur 2 remporte la partie !");
    play = "stop";
  }
};

const endOfTour = () => {
  if (currentPlayer == player1) {
    alert(
      "Le dé tombe sur 1. Fin de votre tour, c'est au joueur 2 de lancer le dé."
    );
    currentScore1 = 0;
    currentPlayer = player2;
  } else {
    alert(
      "Le dé tombe sur 1. Fin de votre tour, c'est au joueur 1 de lancer le dé."
    );
    currentScore2 = 0;
    currentPlayer = player1;
  }
  updateScore();
  showPlayer();
  document.getElementById("de-value").innerHTML = "";
};
