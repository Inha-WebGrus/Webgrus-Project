const express = require('express');
const auth = require('../routes/auth');
const router = express.Router();

router.get('/',
async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ resultCode: 400, error: errors['errors'][0]['msg'] });
    }

    try {


        
    } catch (err) {
        console.error(err);
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    let startDate = req.body['startDate'];
    let endDate = req.body['endDate'];
    let desc = req.body['desc'];
    let title = req.body['title'];

    const authHeader = req.get('Authorization');

    let accessCheck = await auth.accessCheck(authHeader);

    if (!accessCheck['isAuthentication']) {
        return res.status(400).json({ resultCode: 400, resultMessage: accessCheck['message']});
    }

    console.log(accessCheck);

    try {

        return res.status(200).json({ resultCode: 200, resultMessage: '성공'});
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;