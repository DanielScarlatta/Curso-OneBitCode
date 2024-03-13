function Decorator() {
  return function(target, key, descriptor) {
    descriptor.value = function(value:number) 
  };
}

class Planet {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @Decorator()
  calcular(value: number) {
    return value * 2;
  }
}

const planet = new Planet('terra')

const result = planet.calcular(5)

console.log(`Resultado ${result}`)