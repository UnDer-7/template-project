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

/**
 *  USER'S ROUTES
 */
routes.put(`${rootUrl}/user/:id`, validate(validators.UserValidator), handle(controllers.UserController.updateUser))
routes.get(`${rootUrl}/users`, handle(controllers.UserController.getAllUser))
routes.get(`${rootUrl}/user/:id`, handle(controllers.UserController.getUser))
routes.delete(`${rootUrl}/user/:id`, handle(controllers.UserController.deleteUser))

/**
 *  TEMPLATE'S ROUTES
 */
routes.post(`${rootUrl}/template`, validate(validators.TemplateValidator), handle(controllers.TemplateController.createTemplate))
routes.put(`${rootUrl}/template/:id`, validate(validators.TemplateValidator), handle(controllers.TemplateController.updateTemplate))
routes.get(`${rootUrl}/template`, handle(controllers.TemplateController.getAllTemplate))
routes.get(`${rootUrl}/template/:id`, handle(controllers.TemplateController.getTemplate))
routes.delete(`${rootUrl}/template/:id`, handle(controllers.TemplateController.deleteTemplate))

// Do not remove this cometary
// ===== yeoman hook =====
module.exports = routes
