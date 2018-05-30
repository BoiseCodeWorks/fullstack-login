let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = "Board"


let schema = new Schema({
  title: {type: String, required: true},
  description: {type: String},
  creator: { type: ObjectId, ref: 'User', required: true }
})



module.exports = mongoose.model(schemaName, schema)