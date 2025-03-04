const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const URL_PATTERN = /^(ftp|http|https):\/\/[^ "]+$/

const linkSchema = new Schema(
  {
    url: {
      type: String,
      match: [URL_PATTERN, 'URL no valid!'],
      required: 'must be an URL'
    },
    title: String,
    description: String,
    image: String,

    keywords: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        ret.id = ret._id
        delete ret.__v
        delete ret._id
        return ret
      }
    }
  }
)

const Link = mongoose.model('Link', linkSchema)
module.exports = Link
