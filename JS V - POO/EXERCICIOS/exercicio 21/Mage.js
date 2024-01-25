const Character = require("./Character.js");

class Mage extends Character {
  constructor(name, lifeOfPoits, pointOfAttack, pointOfDefense, pointMagic) {
    super()
    this.name = name
    this.lifeOfPoits = lifeOfPoits
    this.pointOfAttack = pointOfAttack
    this.pointOfDefense = pointOfDefense
    this.pointMagic = pointMagic
  }

  attack(targetCharacter) {
    if(targetCharacter instanceof Character) {
      const damege = targetCharacter.pointOfDefense - (this.pointOfAttack + this.pointMagic)

      if(damege < 0) {
        return targetCharacter.lifeOfPoits = targetCharacter.lifeOfPoits + damege
      }
    }
  }

  heal(targetCharacter) {
    if(targetCharacter instanceof Character) {
      const healLife = (this.pointMagic*2)

      if(targetCharacter.lifeOfPoits > 0) {
        targetCharacter.lifeOfPoits += healLife
      }
      
    }
  }

}

module.exports = Mage