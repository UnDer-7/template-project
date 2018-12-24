const Joi = require('joi')

module.exports = {
  body: {
    name: Joi.string().required().min(1).max(25),
    age: Joi.number().integer(),
  }
}
