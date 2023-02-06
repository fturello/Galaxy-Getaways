const express = require("express");

const router = express.Router();

const planetControllers = require("./controllers/planetControllers");

const rocketControllers = require("./controllers/rocketControllers");
const tripControllers = require("./controllers/tripControllers");

router.get("/planets", planetControllers.browse);
router.get("/planet/:id", planetControllers.read);

router.get("/rockets", rocketControllers.browse);
router.get("/rocket/:id", rocketControllers.read);

router.get("/trips", tripControllers.browse);
router.post("/trips", tripControllers.create);

module.exports = router;
