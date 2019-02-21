const UserModel = require('../models/UserModel')

class UserController {
  async createUser (req, res) {
    try {
      const { email } = req.body
      if (await UserModel.findOne({ email })) return res.status(400).json({ error: 'User already exists' })
      const userRes = await UserModel.create(req.body)
      return res.status(201).json(userRes)
    } catch (e) {
      console.trace(e)
      return res.status('500').json({ error: e })
    }
  }

  async updateUser (req, res) {
    try {
      const { email, password } = req.body
      const user = await UserModel.findById(req.params.id)
      if (!user) return res.status(400).json({ error: 'User not found' })

      user.email = email
      user.password = password
      const userRes = await user.save()
      return res.status(200).json(userRes)
    } catch (e) {
      console.trace(e)
      return res.status(500).json({ error: e })
    }
  }

  async getAllUser (req, res) {
    try {
      const user = await UserModel.paginate({}, {
        page: req.query.page || 1,
        limit: req.query.page || 25,
        sort: req.query.sort || '-createdAt'
      })
      return res.status(200).json({ user })
    } catch (e) {
      console.trace(e)
      return res.status(500).json({ error: e })
    }
  }

  async getUser (req, res) {
    try {
      const user = await UserModel.findById(req.params.id)
      if (!user) return res.status(404).json({ error: 'User not found' })
      return res.json(user)
    } catch (e) {
      console.trace(e)
      res.status(500).json({ error: e })
    }
  }

  async deleteUser (req, res) {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id)
      if (!user) return res.status(404).json({ error: 'User not found' })
      return res.status(200).json(true)
    } catch (e) {
      console.trace(e)
      res.status(500).json({ error: e })
    }
  }
}

module.exports = new UserController()
