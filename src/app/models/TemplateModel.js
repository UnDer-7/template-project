const mongoose = require('mongoose')
const paginate = require('mongoose-paginate')

const TemplateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

TemplateSchema.plugin(paginate)

module.exports = mongoose.model('Template', TemplateSchema)
