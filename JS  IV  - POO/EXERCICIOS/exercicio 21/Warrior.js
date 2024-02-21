const Character = require("./Character.js");

class Warrior extends Character {
  #position = 'attack'
  constructor(name, lifeOfPoits, pointOfAttack, pointOfDefense, pointOfShield) {
    super(name, lifeOfPoits, pointOfAttack, pointOfDefense)
    this.pointOfShield = pointOfShield
  }

  chargePosition() {
    if(this.#position === 'attack') {
      this.#position = 'defense'
      this.pointOfDefense += this.pointOfShield

    } else {
      this.#position = 'attack'
      this.pointOfDefense -= this.pointOfShield
    }
  }

  attack(targetCharacter) {
    if(targetCharacter instanceof Character && this.#position === 'attack') {
      
      if(damege < 0) {
        super().attack(targetCharacter)
      }
    } else {
      console.log('A posição entá "defesa", o personagem não podera atacar')
    }
  }
}

module.exports = Warrior