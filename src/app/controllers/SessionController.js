const TemplateModel = require('../models/TemplateModel')

class SessionController {
  async generateToken (req, res) {
    const { name } = req.body

    const templateRes = await TemplateModel.findOne({ name })
    if (!templateRes) {
      return res.status(400).json({ error: 'User not found' })
    }

  }
}
