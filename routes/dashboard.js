const router = require("express").Router();
let Portfolio = require("../models/portfolio.model");

router.route("/").get((req, res) => {
  Portfolio.find()
    .then((portfolio) => res.json(portfolio))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Portfolio.findById(req.params.id)
    .then((lavoro) => res.json(lavoro))
    .catch((err) => res.status(400).json("Error: " + err));
});


router.route("/:id").delete((req, res) => {
  Portfolio.findByIdAndDelete(req.params.id)
    .then(() => res.json("Lavoro deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
