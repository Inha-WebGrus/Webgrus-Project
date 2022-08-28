const { check, validationResult } = require('express-validator');
const { sequelize, UserSession } = require('../models');
const nodemailer = require('nodemailer');

const express = require('express');
const User = require('../models/user');
const { v4 } = require('uuid');
const crypto = require('crypto');
const EmailVerify = require('../models/email_verify');
const security = require('../util/security')
const router = express.Router();

/**
 * @swagger
 * /sign-in:
 *   post:
 *    summary: "로그인"
 *    description: "로그인 API"
 *    tags: [Auth]
 *    requestBody:
 *      description: 로그인
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                description: "이메일"
 *              password:
 *                type: string
 *                description: "패스워드"
 *    responses:
 *      "200":
 *        description: 성공
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                data:
 *                  type: string
 *                  example:
 *                    {
 *                      "key": "example"
 *                    }
 */
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
                return res.status(400).json({ resultCode: 400, resultMessage: '이메일 인증을 완료해주세요.' });
            }

            let password = user['password']
            let salt = user['salt']

            reqPassword = crypto.createHash('sha512').update(reqPassword + salt).digest('hex');

            if (reqPassword != password) {
                return res.status(400).json({ resultCode: 400, resultMessage: '아이디 또는 비밀번호가 일치하지 않아요.' })
            }

            let sessionKey = v4();

            let userSession = await UserSession.create({
                key: sessionKey,
                expire_at: sequelize.fn("DATE_ADD", sequelize.literal("NOW()"), sequelize.literal("INTERVAL 1 DAY")),
                user_id: user['id'],
                create_at: new Date()
            });

            let data = {};

            data['key'] = security.encryptWithAES256('0000000000@asdasdas#adadadskey00', sessionKey);

            return res.json({ data })
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

/**
 * @swagger
 * /user/active:
 *   put:
 *    summary: "회원 상태 활성화"
 *    description: "회원 상태 활성화 API"
 *    tags: [Auth]
 *    requestBody:
 *      description: 로그인
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              c:
 *                type: string
 *                description: "이메일 활성화 토큰"
 *    responses:
 *      "200":
 *        description: 성공
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                resultCode:
 *                  type: int
 *                  example:
 *                    200
 *                resultMessage:
 *                  type: string
 *                  example:
 *                    성공
 */
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

            return res.status(200).json({ resultCode: 200, resultMessage: '성공' });
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

/**
 * @swagger
 * /user:
 *   post:
 *    summary: "회원가입"
 *    description: "회원가입 API"
 *    tags: [Auth]
 *    requestBody:
 *      description: 회원가입
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                description: "이메일"
 *                example: "test@inha.ac.kr"
 *              nickname:
 *                type: string
 *                description: "닉네임"
 *                example: "인하"
 *              password:
 *                type: string
 *                description: "패스워드"
 *                example: "1234"
 *              confirmPassword:
 *                type: string
 *                description: "패스워드 확인"
 *                example: "1234"
 *    responses:
 *      "200":
 *        description: 성공
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                resultCode:
 *                  type: int
 *                  example:
 *                    200
 *                resultMessage:
 *                  type: string
 *                  example:
 *                    성공
 */
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

/**
 * @swagger
 * /user/email/check:
 *   get:
 *    summary: "이메일 가입 여부 확인"
 *    description: "이메일 가입 여부 확인 API"
 *    tags: [Auth]
 *    parameters:
 *      - in: query
 *        name: email
 *        required: true
 *        description: 이메일
 *        schema:
 *          type: string
 *    responses:
 *      "200":
 *        description: 성공
 *        content:
 *          application/json:
 *            schema:
 *              type: boolean
 */
router.get('/user/email/check', async (req, res, next) => {
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

function getUserByEmail(email) {
    return User.findOne({
        where: {
            email: email
        },
    });
}

function getUserSessionByKey(key) {
    return UserSession.findOne({
        where: {
            key: key
        },
        include: ["User"]
    });
}

module.exports.accessCheck = async (key) => {
    if (key == null) {
        return {
            isAuthentication: false,
            message: '인증 정보가 확인 되지 않아요.'
        };
    }

    let decriptKey = security.decryptWithAES256('0000000000@asdasdas#adadadskey00', key);
    const userSession = await getUserSessionByKey(decriptKey);

    if (userSession == null) {
        return {
            isAuthentication: false,
            message: '인증 정보가 확인 되지 않아요.'
        };
    }

    return {
        isAuthentication: true,
        user: userSession['User']
    };
};

module.exports.router = router;