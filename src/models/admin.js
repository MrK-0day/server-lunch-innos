import { Schema, model } from 'mongoose'

const adminSchema = new Schema({
  _id: String,
  username: String,
  password: String,
  isPublic: Boolean,
  isLock: Boolean
})

export default model('Admin', adminSchema)
