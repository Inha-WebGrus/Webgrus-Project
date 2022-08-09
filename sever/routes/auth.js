const { check, validationResult } = require('express-validator');

const express = require('express');
const User = require('../models/user');
const EmailVerification = require('../models/email_verification');


const router = express.Router();

const { sequelize } = require('../models');

router.post('/user/sign-in', async (req, res) => {

    res.send('Hello, User');
});

router.post('/user',
    [
        check('nickname', 'invalid nickname.').not().isEmpty(),
        check("email", 'invalid email format.').isEmail(),
        check('password', 'invalid password.').not().isEmpty()
    ],
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ resultCode: 400, errors: errors.array() });
        }

        let nickname = req.body['nickname']
        let email = req.body['email']
        let password = req.body['password']

        try {
            if (await getUserByEmail(email) != null) {
                return res.status(409).json({ resultCode: 409, resultMessage: 'Email already subscribed.'});
            }

            const user = await User.create({
                email: email,
                nickname: nickname,
                password: password
            });

            res.json({resultCode: 200, data: user})
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

router.get('/user/id/check', async (req, res, next) => {
    let email = req.query['email'];
    try {
        const user = await getUserByEmail(email)

        if (user != null) {
            res.json(true);
        }

        res.json(false);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;

function getUserByEmail(email) {
    return User.findOne({
        where: {
            email: email
        },
    });
}