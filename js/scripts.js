// Business logic


function User(name, diceRoll, score, turn) {
  this.name = name;
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
  $("#start").click(function(){

    // initial values
    var name = "";
    var score = 0;
    var turn = true;
    var dice = 0;

    // instantiate users object
    var newUser = new User(name, dice, score, turn);
    var computer = new User(name, dice, score, turn);


    $('#roll').click(function() {

       while(){
         dice = Math.floor(Math.random() * 6);
         newUser.turnScore(dice);
       });
     });
})
