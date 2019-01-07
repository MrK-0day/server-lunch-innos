import { Schema, model } from 'mongoose'

const orderSchema = new Schema({
  _id: String,
  employeeID: String,
  dishID: String,
  date: String,
  count: Number,
  node: String,
  isComplete: Boolean,
})

export default model('Order', orderSchema)
