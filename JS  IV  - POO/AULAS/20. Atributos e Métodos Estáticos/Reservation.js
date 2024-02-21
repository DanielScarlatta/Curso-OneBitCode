class Reservation {
  constructor(guests, room, days) {
    this.guests = guests
    this.room = room
    this.days = days
    this.total = days * Reservation.baseFee

  }

  static baseFee = 150

  static get baseFeeValue() {
    return Reservation.baseFee
  }

  static get premiemFee() {
    return Reservation.baseFee * 1.5
  }
}

console.log(Reservation.baseFeeValue)

const r1 = new Reservation(3, 201, 5)
console.log(r1)

Reservation.baseFee = 200

const r2 = new Reservation(5, 207, 5)
console.log(r2)

console.log(`premium fee is ${Reservation.premiemFee}`)