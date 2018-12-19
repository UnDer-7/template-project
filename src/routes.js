const express = require('express')
const handle = require('express-async-handler')
const validate = require('express-validation')
const routes = express.Router()

const controllers = require('./app/controllers')
const validators = require('./app/validators')

const authMiddleware = require('./app/middlewares/auth')

const rootUrl = '/api'

routes.post(`${rootUrl}/user`, validate(validators.UserValidator), handle(controllers.UserController.createUser))

routes.use(authMiddleware)

routes.post(`${rootUrl}/tst`, validate(validators.TemplateValidator), handle(controllers.TemplateController.createTemplate))
routes.get(`${rootUrl}/tst`, handle(controllers.TemplateController.getAllTemplate))

module.exports = routes
