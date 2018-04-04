// Business logic


function User(turnScore, score) {
  this.turnScore = turnScore
  this.score = score;
}

User.prototype.calcTotalScore = function() {
  return this.score += this.turnScore;
}

User.prototype.calcTurnScore = function(num) {
  return this.turnScore += num;
}



// UI logic
$(document).ready(function(){
  $("#start").on("click", function(){
    console.log("Hey");
    // initial values
    var turnScore = 0;
    var score = 0;
    var oneRoll = 0;

    // instantiate users object
    var newUser = new User(turnScore, score);
    var computer = new User(turnScore, score);

    $("#diceRollComp").text(oneRoll);
    $("#turnScoreComp").text(turnScore);
    $("#totalScoreComp").text(score);
    $("#diceRollUser").text(oneRoll);
    $("#turnScoreUser").text(turnScore);
    $("#totalScoreUser").text(score);


    var rolling = function(oneRoll, someObject, string) {
      oneRoll = Math.floor(Math.random() * 6) + 1;
      $("#diceRoll"+string).text(oneRoll);
      if(oneRoll != 1){
        this.turnScore = someObject.calcTurnScore(oneRoll);
        $("#turnScore"+string).text(someObject.turnScore);
      } else {
        newUser.turnScore = 0;
        $("#turnScore"+string).text(someObject.turnScore);
      }
      return newUser.turnScore;
    }

    $("#roll").on('click', function(){
      if (oneRoll != 1) {
      var score = rolling(oneRoll, newUser, "User");
    } else {
      alert()
    }
    });



      $("#roll").on('click', function(){
        console.log("WooHoo");
        //computer.score = computer.totalScore();
        $("#Comp-totalScore").text();
        $("#switch2").hide();
        oneRoll = Math.floor(Math.random() * 6) + 1;
        $("#diceRoll").text(oneRoll);
        console.log("Random: " + oneRoll)
        if(oneRoll != 1){
          newUser.turnScore = newUser.totalTurnScore(oneRoll);
          $("#turnScore").text(newUser.turnScore);
          console.log("Dice:" + newUser.turnScore);
        } else {
          newUser.turnScore = 0;
          $("#turnScore").text(newUser.turnScore);
          $("#switch1").show();
          newUser.score = newUser.totalScore();
          $("#totalScore").text(newUser.score);

          if(oneRoll == 1){
            computer.turnScore = 0;
            $("#switch2").show();
          } else {
            computer.turnScore = computer.totalTurnScore(oneRoll);
            console.log("Dice:" + computer.turnScore);
            oneRoll = Math.floor(Math.random() * 6) + 1;
            console.log("Random: " + oneRoll)
          }
        }
      });

      $("#stop").on('click', function(){
        newUser.score = newUser.totalScore();
        $("#switch1").hide();
        if(oneRoll == 1){
          computer.turnScore = 0;
          $("#switch2").show();
        } else {
          computer.turnScore = computer.totalTurnScore(oneRoll);
          console.log("Dice:" + computer.turnScore);
          x = Math.floor(Math.random() * 6) + 1;
          console.log("Random: " + oneRoll)
        }
      });

  });
})
