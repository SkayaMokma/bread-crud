const mongoose = require('mongoose')

const breadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  hasGluten: {
    type: Boolean
  },
  image: {
    type: String,
    default: 'https://thumbs.dreamstime.com/b/bread-cut-14027607.jpg'
  },
  baker: {
    type: mongoose.Types.ObjectId,
    ref: 'Baker'
  }
})

breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker.name} who has been with us since ${this.baker.startDate.getFullYear()}.`
}

module.exports = mongoose.model('Bread', breadSchema)