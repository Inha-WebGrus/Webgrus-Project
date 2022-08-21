const { check, validationResult } = require('express-validator');
const { sequelize, UserSession } = require('../models');
const nodemailer = require('nodemailer');

const express = require('express');
const User = require('../models/user');
const { v4 } = require('uuid');
var crypto = require('crypto');
const EmailVerify = require('../models/email_verify');

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
            check('c', '유효하지 않은 인증 코드예요.').notEmpty(),
        ],
        async (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ resultCode: 400, error: errors['errors'][0]['msg'] });
            }

            let authCode = req.query['c'];

            try {
                let emailVerify = await EmailVerify.findOne({
                    where: {
                        auth_code: authCode
                    }
                });

                if (emailVerify == null) {
                    return res.status(400).json({ resultCode: 400, resultMessage: '유효하지 않은 인증 코드예요.' });
                }

                if (!emailVerify.status) {
                    return res.status(400).json({ resultCode: 400, resultMessage: '유효하지 않은 인증 코드예요.' });
                }

                let user = await getUserByEmail(email);

                if (user.status) {
                    return res.status(409).json({ resultCode: 409, resultMessage: '이미 인증이 완료 되었어요.' });
                }

                await User.update({
                    status: true
                },
                {
                    where: user.id
                });

                return res.status(200).json({ resultCode: 200, resultMessage: '성공'});
            } catch (err) {
                console.error(err);
                next(err);
            }
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
        let emailDomain = email.split('@')[1];
        
        if (emailDomain != 'inha.edu' && emailDomain != 'inha.ac.kr') {
            return res.status(400).json({ resultCode: 400, resultMessage: '인하대학교 이메일 주소로만 가입이 가능해요.' })
        }

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

            let authCode = v4()

            const emailVerify = await EmailVerify.create({
                email: email,
                auth_code: authCode,
                status: true,
            });

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'inplace.2022@gmail.com',
                    pass: 'upqfifcsuokxeeyy'
                }
            });

            await transporter.sendMail({
                // 보내는 곳의 이름과, 메일 주소를 입력
                from: `'인플레이스' <'inplace.2022@gmail.com'>`,
                // 받는 곳의 메일 주소를 입력
                to: email,
                // 보내는 메일의 제목을 입력
                subject: '인플레이스 가입 인증 메일 이에요.',
                // 보내는 메일의 내용을 입력
                // text: 일반 text로 작성된 내용
                // html: html로 작성된 내용
                // text: '테스트',
                html: `<b>가입을 완료 하시려면 아래 주소를 클릭해주세요.<br>${emailVerify.auth_code}</b>`,
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