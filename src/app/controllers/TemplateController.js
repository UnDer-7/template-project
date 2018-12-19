const TemplateModel = require('../models/TemplateModel')

class TemplateController {
  async createTemplate (req, res) {
    const { name } = req.body

    if (await TemplateModel.findOne({ name })) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const templateRes = await TemplateModel.create(req.body)
    return res.json(templateRes)
  }

  getAllTemplate(req, res) {
    res.json({ Tst: 'Get All URL working' })
  }
}

module.exports = new TemplateController()
