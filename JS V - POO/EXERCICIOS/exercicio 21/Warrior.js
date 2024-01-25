const Character = require("./Character.js");

class Warrior extends Character {
  #position = 'attack'
  constructor(name, lifeOfPoits, pointOfAttack, pointOfDefense, pointOfShield) {
    super()
    this.name = name
    this.lifeOfPoits = lifeOfPoits
    this.pointOfAttack = pointOfAttack
    this.pointOfDefense = pointOfDefense
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
      const damege = targetCharacter.pointOfDefense - this.pointOfAttack

      if(damege < 0) {
        return targetCharacter.lifeOfPoits = targetCharacter.lifeOfPoits + damege
      }
    } else {
      console.log('A posição entá "defesa", o personagem não podera atacar')
    }
  }
}


module.exports = Warrior