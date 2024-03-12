import { Spaceship } from "./export";
import * as lodash from "lodash"

interface BattleSpaceship extends Spaceship {
  weapons: number
}

let xwing: BattleSpaceship = {
  name: 'x-wing',
  pilot: 'Luke',
  speed: 90,
  weapons: 3
}

console.log(lodash.camelCase('daniel scarlatta'))
