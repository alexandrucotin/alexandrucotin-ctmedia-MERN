const router = require('express').Router ();
let Portfolio = require('../models/portfolio.model');

router.route('/').get((req,res) => {
    Portfolio.find()
    .then(portfolio => res.json(portfolio))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req,res) => {
    const title = req.body.title;
    const img = req.body.img;

    const newPortfolio = new Portfolio({
        title,
        img
    });

    newPortfolio.save()
    .then(() => res.json("Nuovo progetto aggiunto al portfolio!"))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;


  
