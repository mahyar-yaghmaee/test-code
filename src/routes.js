const path = require('path');
const Joi = require('joi');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      console.log('what');
      return h.file(path.join(__dirname, '../web/index.html'));
    }
  },
  { // Example endpoint
    method: 'GET',
    path: '/add',
    config: {
      handler: (request, context) => context.response({equals: (request.query.a + request.query.b)}),
      description: 'Add',
      tags: ['api'],
      notes: ['Adds together two numbers and return the result'],
      validate: {
        query: {
          a: Joi.number()
            .required()
            .description('the first number'),
          b: Joi.number()
            .required()
            .description('the second number')
        }
      },
      response: {
        schema: Joi.object({
          equals: Joi.number()
        }).label('Result')
      }
    }
  }
];
