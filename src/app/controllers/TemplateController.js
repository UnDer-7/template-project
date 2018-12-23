const TemplateModel = require('../models/TemplateModel')

class TemplateController {
  async createTemplate (req, res) {
    const templateRes = await TemplateModel.create(req.body)
    return res.json(templateRes)
  }

  async updateTemplate (req, res) {
    const templateRes = await TemplateModel.findOneAndUpdate(req.params.id, req.body, { new: true })
    return res.json(templateRes)
  }

  async getAllTemplate (req, res) {
    const templateRes = await TemplateModel.paginate({}, {
      page: req.query.page || 1,
      limit: 20,
      sort: '-createdAt'
    })
    res.json({ templateRes })
  }

  async getTemplate (req, res) {
    const templateRes = await TemplateModel.findById(req.params.id)
    return res.json(templateRes)
  }

  async deleteTemplate (req, res) {
    await TemplateModel.findByIdAndDelete(req.params.id)
    return res.send()
  }
}

module.exports = new TemplateController()
