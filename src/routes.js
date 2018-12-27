const express = require('express')
const handle = require('express-async-handler')
const validate = require('express-validation')
const routes = express.Router()

const controllers = require('./app/controllers')
const validators = require('./app/validators')

const authMiddleware = require('./app/middlewares/auth')

const rootUrl = '/api'

routes.post(`${rootUrl}/user`, validate(validators.UserValidator), handle(controllers.UserController.createUser))
routes.post(`${rootUrl}/login`, validate(validators.UserValidator), handle(controllers.SessionController.generateToken))

routes.use(authMiddleware)

routes.get(`${rootUrl}/user`, handle(controllers.UserController.getAllUsers))

routes.post(`${rootUrl}/template`, validate(validators.TemplateValidator), handle(controllers.TemplateController.createTemplate))
routes.put(`${rootUrl}/template/:id`, validate(validators.TemplateValidator), handle(controllers.TemplateController.updateTemplate))
routes.get(`${rootUrl}/template`, handle(controllers.TemplateController.getAllTemplate))
routes.get(`${rootUrl}/template/:id`, handle(controllers.TemplateController.getTemplate))
routes.delete(`${rootUrl}/template/:id`, handle(controllers.TemplateController.deleteTemplate))

// Do not remove this cometary
//===== yeoman hook =====
module.exports = routes
