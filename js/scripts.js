// Business logic
function Dice(){
  this.randomNum = 0;
}

Dice.prototype.oneRoll = function() {
  return this.randomNum = Math.floor(Math.random() * 6) + 1;
}

function Player(turnScore, score) {
  this.dice = new Dice();
  this.turnScore = turnScore;
  this.score = score;
}

Player.prototype.calcTotalScore = function() {
  return this.score += this.turnScore;
}

Player.prototype.calcTurnScore = function(num) {
  if(num == 1) {
    this.turnScore = 0;
  } else {
    this.turnScore += num;
  }
  return this.turnScore;
}



// UI logic
$(document).ready(function(){
  $("#start").on("click", function(){

    // initial values
    var turnScore = 0;
    var score = 0;

    // instantiate users object
    var newPlayer = new Player(turnScore, score);
    var computer = new Player(turnScore, score);

    $("#diceRollComp").text(computer.dice.randomNum);
    $("#turnScoreComp").text(turnScore);
    $("#totalScoreComp").text(score);
    $("#diceRollUser").text(newPlayer.dice.randomNum);
    $("#turnScoreUser").text(turnScore);
    $("#totalScoreUser").text(score);

    $("#roll").on('click', function() {
      newPlayer.dice.randomNum = newPlayer.dice.oneRoll();
      $("#diceRollUser").text(newPlayer.dice.randomNum);
      newPlayer.turnScore = newPlayer.calcTurnScore(newPlayer.dice.randomNum );
      $("#turnScoreUser").text(newPlayer.turnScore);
      if(newPlayer.turnScore == 0) {
        alert("Your turn is over! Please switch turn.");
      }
    });

    S("#switch").on('click', function() {

    })

  });
});
