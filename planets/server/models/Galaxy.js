import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const GalaxySchema = new Schema({
  name: { type: String, required: true},
  stars: {type: Number, required: true}
},
    { timestamps: true})