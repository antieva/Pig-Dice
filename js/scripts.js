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

function resetFieldsPlayer() {
    $("#diceRollUser").val("");
    $("#turnScoreUser").val("");
}

function resetFieldsComp() {
    $("#diceRollComp").val("");
    $("#turnScoreComp").val("");
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
      resetFieldsComp();
      newPlayer.dice.randomNum = newPlayer.dice.oneRoll();
      console.log(newPlayer.dice.randomNum);
      $("#diceRollUser").text(newPlayer.dice.randomNum);
      newPlayer.turnScore = newPlayer.calcTurnScore(newPlayer.dice.randomNum );
      console.log(newPlayer.turnScore);
      $("#turnScoreUser").text(newPlayer.turnScore);
      if(newPlayer.turnScore == 0) {
        alert("Your turn is over! Please switch turn.");
      }
    });

    $("#switch").on('click', function() {
      newPlayer.score = newPlayer.calcTotalScore();
      $("#totalScoreUser").text(newPlayer.score);
      newPlayer.dice.randomNum = 0;
      newPlayer.turnScore = 0;

      for (var i = 1; i <=2; i++) {
        if(newPlayer.score >= 100) {
          alert("You win!!! Game over.")
          resetFieldsComp();
          break;
        }
        computer.dice.randomNum = computer.dice.oneRoll();
        console.log(computer.dice.randomNum + "Comp dice")
        $("#diceRollComp").text(computer.dice.randomNum);
        computer.turnScore = computer.calcTurnScore(computer.dice.randomNum );
        console.log(computer.turnScore + "Comp turn score");
        $("#turnScoreUser").text(computer.turnScore);
        if(computer.turnScore == 0) {
          alert("Computer turn is over! Roll a dice!");
          break;
        }
      }
      computer.score = computer.calcTotalScore();
      $("#totalScoreComp").text(computer.score);
      computer.turnScore = 0;
      $("#turnScoreUser").text(computer.turnScore);
      if(computer.score >= 100) {
        alert("Computer win!!! Game over.")
        resetFieldsPlayer();
      } else {
        alert("Computer turn is over! Roll a dice!");
      }
    });

  });
});
