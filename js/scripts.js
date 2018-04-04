// Business logic


function User(diceRoll, score, turn) {
  this.diceRoll = diceRoll;
  this.score = score;
  this.turn = turn;
}

User.prototype.totalScore = function() {
  return this.score += this.diceRoll;
}

User.prototype.turnScore = function(num) {
  return this.diceRoll += num;
}



// UI logic
$(document).ready(function(){
  $("#start").on("click", function(){

    // initial values
    var name = "";
    var score = 0;
    var turn = false;
    var dice = 0;

    // instantiate users object
    var newUser = new User(dice, score, turn);
    var computer = new User(dice, score, turn);
    var random = 0;

    while(newUser.score <= 100 || computer.score <= 100){
      turn = $("#stop").on("click",function(){
        turn = true;
        console.log(turn);
        return turn;
      });
      while(random !== 1 || turn){
        console.log("Dice: " +random);
        newUser.dice = newUser.turnScore(random);
        console.log(dice);
        random = Math.floor(Math.random() * 6) + 1;
      }
      if(random == 1){
        newUser.dice = 0;
      }
      newUser.score = newUser.totalScore();
      console.log("Score:" + newUser.score);
      if(turn){
        var i = 1;
        while(random !== 1 || i <= 3){
          console.log("Computer Dice: " +random);
          computer.dice = computer.turnScore(random);
          console.log(computer.dice);
          random = Math.floor(Math.random() * 6) + 1;
          i++;
        }
        if(random == 1){
          dice = 0;
        }
        computer.score = computer.totalScore();
        console.log("Computer Score:" + computer.score);
      }
    }

  });
})
