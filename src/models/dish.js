import { Schema, model } from 'mongoose'

const dishSchema = new Schema({
  _id: String,
  name: String,
  count: Number,
  date: Number
})

export default model('Dish', dishSchema)
