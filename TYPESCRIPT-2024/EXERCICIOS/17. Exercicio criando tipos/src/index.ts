const universe = [];
type Situation = "inhabited" | "habitable" | "uninhabitable" | "unexplored"
const any

function salvePlanet(
  name: string,
  coordinates: [number, number, number, number],
  situation: Situation,
  satellites: string[]
) {
  const planet = {
    name,
    coordinates,
    situation,
    satellites
  }

  universe.push(planet)
}
const terra = salvePlanet('terra', 4, 'inhabited', 'lua')