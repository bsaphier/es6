let winnerArr = [];

class Character {
  constructor( name, attackPower, health ) {
    this.name = name;
    this.attackPower = attackPower;
    this.health = health;
  }

  attack( opposingPlayer ) {
    if (Math.random() > 0.5) {
      opposingPlayer.health -= this.attackPower;
    }
  }

  heal () {
    this.health = 10;
  }
}

const battle = (player1, player2) => {

  while (player1.health > 0 && player2.health > 0) {
    player1.attack(player2);
    if (player2.health > 0) player2.attack(player1);
  }

  const winner = (player1.health > 0) ? player1 : player2;
  winner.heal();

  const winnerObj = {
    winner
  };

  winnerArr.push(winnerObj);

  return winnerArr;
};

const red = new Character('red', 9, 10);
const blue = new Character('blue', 9, 10);
const green = new Character('green', 9, 10);
const yellow = new Character('yellow', 9, 10);
const orange = new Character('orange', 9, 10);
const purple = new Character('purple', 9, 10);


battle(red, blue);

battle(green, yellow);

battle(winnerArr[0].winner, winnerArr[1].winner);

console.log(winnerArr);
