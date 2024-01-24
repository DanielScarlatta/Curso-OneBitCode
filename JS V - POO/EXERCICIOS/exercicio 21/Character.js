class Character {
  constructor(name, lifePoits, pointOfAttack, pointOfDefense) {
    this.name = name
    this.lifeOfPoits = lifePoits
    this.pointOfAttack = pointOfAttack
    this.pointOfDefense = pointOfDefense
  }

  attack(targetCharacter) {
    if(targetCharacter instanceof Character) {
      const damege = targetCharacter.pointOfDefense - this.pointOfAttack

      if(damege < 0) {
        return targetCharacter.lifeOfPoits = targetCharacter.lifeOfPoits + damege
      }
    }
  }
}

module.exports = Character