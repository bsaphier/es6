'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var winnerArr = [];

var Character = function () {
  function Character(name, attackPower, health) {
    _classCallCheck(this, Character);

    this.name = name;
    this.attackPower = attackPower;
    this.health = health;
  }

  _createClass(Character, [{
    key: 'attack',
    value: function attack(opposingPlayer) {
      if (Math.random() > 0.5) {
        opposingPlayer.health -= this.attackPower;
      }
    }
  }, {
    key: 'heal',
    value: function heal() {
      this.health = 10;
    }
  }]);

  return Character;
}();

var battle = function battle(player1, player2) {

  while (player1.health > 0 && player2.health > 0) {
    player1.attack(player2);
    if (player2.health > 0) player2.attack(player1);
  }

  var winner = player1.health > 0 ? player1 : player2;
  winner.heal();

  var winnerObj = {
    winner: winner
  };

  winnerArr.push(winnerObj);

  return winnerArr;
};

var red = new Character('red', 9, 10);
var blue = new Character('blue', 9, 10);
var green = new Character('green', 9, 10);
var yellow = new Character('yellow', 9, 10);
var orange = new Character('orange', 9, 10);
var purple = new Character('purple', 9, 10);

battle(red, blue);

battle(green, yellow);

battle(winnerArr[0].winner, winnerArr[1].winner);

console.log(winnerArr);
