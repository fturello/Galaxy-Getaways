const AbstractManager = require("./AbstractManager");

class RocketManager extends AbstractManager {
  constructor() {
    super({ table: "rocket" });
  }
}

module.exports = RocketManager;
