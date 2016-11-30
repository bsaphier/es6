class Character {
  constructor( attackPower, health ) {
    this.attackPower = attackPower;
    this.health = health;
  }

  attack( opposingPlayer ) {
    if (Math.random() > 0.5) {
      opposingPlayer.health -= this.attackPower;
    }
  }
}

const red = new Character(x, y);
const blue = new Character(a, b);

// function Character (/*integer*/ attackPower, /*integer*/ health) {
//     this.attackPower = attackPower;
//     this.health = health;
// };
//
// Character.prototype.attack = function(/*player instance*/ opposingPlayer){
// //code to attack opposingPlayer if Math.random() is greater than 0.5
// };
//
// var red = new Character(x, y);
// var blue = new Character(a, b);
