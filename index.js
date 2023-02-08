function play() {
  roll();
}
function roll() {
  var player1Roll = Math.floor(Math.random() * 6) + 1;
  var player2Roll = Math.floor(Math.random() * 6) + 1;

  var randomPlayer1Img = "images/" + "dice" + player1Roll + ".png";
  var randomPlayer2Img = "images/" + "dice" + player2Roll + ".png";

  if (player1Roll > player2Roll)
    document.querySelector(".winner").textContent = "Player 1 wins the game";
  else if (player1Roll < player2Roll)
    document.querySelector(".winner").textContent = "Player 2 wins the game";
  else document.querySelector(".winner").textContent = "Draw -_-";

  // updating img to player 1 roll
  document.querySelector(".player1-img").setAttribute("src", randomPlayer1Img);

  // updating img to player 2 roll
  document.querySelector(".player2-img").setAttribute("src", randomPlayer2Img);
}
