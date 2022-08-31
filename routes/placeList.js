const express = require('express');
const Place = require('../models/place');
const PlaceReview = require('../models/place_review');
const Userzzim = require('../models/user_zzim');

const router = express.Router();

router.route('/')
.get(async (req, res, next) => {
  try {
    const places = await Place.findAll();
    res.render('placeList', { places });
  } catch (err) {
    console.error(err);
    next(err);
  }
  
})
.post(async (req, res, next) => {
  try {
    const result = await PlaceReview.create({
      user_id: req.body.id,
      place_id: req.body.place_id,
      description: req.body.des,
    });
    res.redirect("back");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.route('/:id')
.get(async (req, res, next) => {
  try {
    const places = await Place.findOne({
      where: {
          id: req.params.id
      },   
  });
  const placeReveiws = await PlaceReview.findOne({
    where: {
        place_id: req.params.id
    },
  });
    res.render('placeInfo', { places });
  } catch (err) {
    console.error(err);
    next(err);
  }
  
});

router.route('/placeReview/:id')
.get(async (req, res, next) => {
  try {
    const placeReviews = await PlaceReview.findOne({
      where: {
          place_id: req.params.id
      },
  }); 
    res.render('placeReview', { placeReviews });
  } catch (err) {
    console.error(err);
    next(err);
  }
  
});

module.exports = router;