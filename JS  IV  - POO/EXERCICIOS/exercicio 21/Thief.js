const Character = require("./Character.js");

class Thief extends Character {

  attack(targetCharacter) {
    if(targetCharacter instanceof Character) {
      const damege = (targetCharacter.pointOfDefense - this.pointOfAttack)*2

      if(damege < 0) {
        return targetCharacter.lifeOfPoits = targetCharacter.lifeOfPoits + damege
      }
    }
  }
}

module.exports = Thief