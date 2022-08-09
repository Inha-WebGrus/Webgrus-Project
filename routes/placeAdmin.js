const express = require('express');
const Place = require('../models/place');

const router = express.Router();

router.route('/')
.get(async (req, res, next) => {
  try {
    const places = await Place.findAll();
    res.render('sequelize', { places });
  } catch (err) {
    console.error(err);
    next(err);
  }
  
})
.post(async (req, res, next) => {
  try {
    const place = await Place.create({
      name: req.body.name,
      adress: req.body.adress,
    });
    console.log(place);
    res.status(201).json(place);
    res.redirect("back");
  } catch (err) {
    console.error(err);
    next(err);
  }
})
.put(async (req, res, next) => {
  try {
    const result = await Place.update({
      name: req.body.name,
      adress: req.body.adress,
    }, {
      where: { id: req.body.id, },
    });
    console.log(place);
    res.status(201).json(place);
    res.redirect("back");
  } catch (err) {
    console.error(err);
    next(err);
  }
});


router.route('/:id')
  .delete(async (req, res, next) => {
    try {
      const result = await Place.destroy({ where: { id: req.params.id } });
      res.redirect("back");
    } catch (err) {
      console.error(err);
      next(err);
    }
  });



module.exports = router;