const AbstractManager = require("./AbstractManager");

class TripManager extends AbstractManager {
  constructor() {
    super({ table: "trip" });
  }

  insert(trip) {
    return this.connection.query(
      `insert into ${this.table} (firstName, lastName, mail, phone, departure, returne, planet, rocket, price ) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        trip.firstName,
        trip.lastName,
        trip.mail,
        trip.phone,
        trip.departure,
        trip.returne,
        trip.planet,
        trip.rocket,
        trip.price,
      ]
    );
  }
}
module.exports = TripManager;
