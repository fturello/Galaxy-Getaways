const models = require("../models");

const browse = (req, res) => {
  models.trip
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const create = (req, res) => {
  const trip = req.body;

  // TODO validations (length, format...)

  models.trip
    .insert(trip)
    .then(([result]) => {
      res.status(201).json({ id: result.insertId, ...trip });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  create,
};
