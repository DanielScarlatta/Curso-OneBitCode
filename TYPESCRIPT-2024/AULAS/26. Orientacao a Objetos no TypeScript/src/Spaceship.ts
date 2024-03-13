// private -> metodo ou atributo so acessivel na propria classe
// protected -> metodo ou atributo so acessivel na propria classe e em suas sub-classes
// public -> metodo ou atributo so acessivel para todos

class Spaceship {
  private _name: string;
  protected captain: string;
  protected speed: number;

  get name() {
    //...
    return this._name
  }

  set name(name:string) {
    //...
    this._name = name
  }

  constructor(name:string , captain: string) {
    this.name = name;
    this.captain = captain;
    this.speed = 0;
  }

  public accelerate(rate:number, time:number) {
    this.speed = rate * time;
  }
}

class Fighter extends Spaceship {
  weapons:number;

  //O atributo weapons existe mesmo sem um construtor
  constructor(name:string, capitain:string, weapons:number) {
    super(name, capitain)
    this.weapons = weapons
  }

  shoot() {
    for (let i = 0; i < this.weapons; i++) {
      console.log("Pew!");
    }
  }

  erase() {
    this.captain = "";
  }
}

let ship = new Fighter("USS Enterprise", "James T. Kirk", 10);

ship.accelerate(50, 10);
ship.weapons = 20

ship.name = 'Libeee'