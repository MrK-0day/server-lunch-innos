import { Schema, model } from 'mongoose'

const empolyeeSchema = new Schema({
  _id: String,
  fbID: String,
  token: String,
  email: String,
  name: String,
})

export default model('Employee', empolyeeSchema)
