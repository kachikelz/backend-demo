import swaggerJsdoc from 'swagger-jsdoc';
import { config } from 'dotenv';

config();

const host = process.env.HOST_NAME
  || (process.env.HEROKU_APP_NAME
    ? `${process.env.HEROKU_APP_NAME}.herokuapp.com`
    : `localhost:${process.env.PORT || 5000}`);
const projectName = process.env.PROJECT_NAME || 'Abarian';
const swaggerDefinition = {
  info: {
    title: projectName,
    version: '1.0.0',
    description: 'Abarian Trading Platform '
  },
  host,
  basePath: '/api/v1'
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ['swagger.yaml']
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
