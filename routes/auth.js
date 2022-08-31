const { check, validationResult } = require('express-validator');
const { sequelize, UserSession } = require('../models');

const express = require('express');
const User = require('../models/user');
const EmailVerification = require('../models/email_verification');
const { v4 } = require('uuid');
var crypto = require('crypto');

const router = express.Router();

router.post('/sign-in',
    [
        check('email', '이메일을 입력해주세요.').notEmpty(),
        check('password', '패스워드를 입력해주세요.').notEmpty()
    ],
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ resultCode: 400, error: errors['errors'][0]['msg'] });
        }

        let email = req.body['email'];
        let reqPassword = req.body['password'];

        try {
            let user = await getUserByEmail(email);

            if (user == null) {
                return res.status(400).json({ resultCode: 400, resultMessage: '아이디 또는 비밀번호가 일치하지 않아요.' });
            }

            if (user['status'] == false) {
                return res.status(400).json({ resultCode: 400, resultMessage: '이메일 인증을 완료해주세요.'});
            }

            let password = user['password']
            let salt = user['salt']

            reqPassword = crypto.createHash('sha512').update(reqPassword + salt).digest('hex');

            if (reqPassword != password) {
                return res.status(400).json({ resultCode: 400, resultMessage: '아이디 또는 비밀번호가 일치하지 않아요.' })
            }

            let userSession = await UserSession.create({
                key: v4(),
                expire_at: sequelize.fn("DATE_ADD", sequelize.literal("NOW()"), sequelize.literal("INTERVAL 1 DAY")),
                user_id : user['id'],
                create_at: new Date()
            });

            return res.json({userSession})
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

router.put('/user/active',
[

],
async (req, res, next) => {



});

router.post('/user',
    [
        check('nickname', '닉네임을 입력해주세요.').notEmpty(),
        check('email', '이메일을 입력해주세요.').notEmpty(),
        check('email', '이메일 형식이 유효하지 않아요.').isEmail(),
        check('password', '패스워드를 입력해주세요.').notEmpty(),
        check('confirmPassword', '패스워드 확인을 입력해주세요.').notEmpty()
    ],
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ resultCode: 400, error: errors['errors'][0]['msg'] });
        }

        let nickname = req.body['nickname'];
        let email = req.body['email'];
        let password = req.body['password'];
        let confirmPassword = req.body['confirmPassword'];

        if (password != confirmPassword) {
            return res.status(400).json({ resultCode: 400, resultMessage: '비밀번호와 비밀번호 확인이 일치하지 않아요.' })
        }

        try {
            if (await getUserByEmail(email) != null) {
                return res.status(409).json({ resultCode: 409, resultMessage: '이미 가입 된 이메일 이에요.' });
            }

            let salt = Math.round((new Date().valueOf() * Math.random())) + "";
            let encryptPassword = crypto.createHash('sha512').update(password + salt).digest('hex');

            const user = await User.create({
                email: email,
                nickname: nickname,
                password: encryptPassword,
                salt: salt,
                status: false,
            });

            return res.json({ resultCode: 200, message: '성공' });
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