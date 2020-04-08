const router = require("express").Router();
let Portfolio = require("../models/portfolio.model");
let Lavoro = require("../models/lavoro.model");

router.route("/").get((req, res) => {
  Portfolio.find()
    .then((portfolio) => res.json(portfolio))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const img = req.body.img;
  const video = req.body.video;

  const newLavoro = new Lavoro({
    title,
    description,
    img,
    video,
  });

  newLavoro
    .save()
    .then(() => res.json("Lavoro added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/upload").post((req, res) => {
  if (req.files == null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.err();
      return res.setMaxListeners(500).send(err);
    }

    res.json({
      filename: file.name,
      filePath: `/uploads${file.name}`,
    });
  });
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
