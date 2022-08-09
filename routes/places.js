const express = require('express');
const Place = require('../models/place');

const router = express.Router();

router.route('/')
  .get(async (req, res, next) => {
    try {
      const places = await Place.findAll();
      res.json(places);
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
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;