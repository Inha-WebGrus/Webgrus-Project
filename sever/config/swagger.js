const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: 'InPlace API',
            version: '1.0.0',
            description: 'InPlace API'
        },
        servers: [
            {
                url: 'http://localhost:3000',
            }
        ],
    },
    apis: ['./app.js', './routes/*.js']
};

const specs = swaggerJsDoc(options);
module.exports = {
    swaggerUi,
    specs
};

// const swaggerUi = require("swagger-ui-express")
// const swaggereJsdoc = require("swagger-jsdoc")

// const options = {
//   swaggerDefinition: {
//     openapi: "3.0.0",
//     info: {
//       version: "1.0.0",
//       title: "개발이 취미인 남자",
//       description:
//         "프로젝트 설명 Node.js Swaager swagger-jsdoc 방식 RestFul API 클라이언트 UI",
//     },
//     servers: [
//       {
//         url: "http://localhost:3000", // 요청 URL
//       },
//     ],
//   },
//   apis: ["./routers/*.js", "./routers/user/*.js"], //Swagger 파일 연동
// }
// const specs = swaggereJsdoc(options)

// module.exports = { swaggerUi, specs }