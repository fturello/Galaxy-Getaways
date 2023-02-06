const AbstractManager = require("./AbstractManager");

class PlanetManager extends AbstractManager {
  constructor() {
    super({ table: "planet" });
  }
}
module.exports = PlanetManager;
