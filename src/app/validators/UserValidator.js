const Joi = require('joi')

module.exports = {
  body: {
    login: Joi.string().required(),
    password: Joi.string().required()
  }
}
