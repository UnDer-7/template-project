const UserModel = require('../models/UserModel')

class UserController {
  async createUser (req, res) {
    const { login } = req.body

    if (await UserModel.findOne({ login })) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const userRes = await UserModel.create(req.body)
    return res.json(userRes)
  }
}
module.exports = new UserController()
