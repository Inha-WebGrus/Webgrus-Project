const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'InPlace API',
            version: '1.0.0',
            description: 'InPlace API'
        },
        host: 'localhost:3000',
        basePath: '/'
    },
    apis: ['../routes/*.js', '../swagger/*']
};

const specs = swaggerJsDoc(options);
module.exports = {
    swaggerUi,
    specs
};
