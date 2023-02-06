import mongoose from 'mongoose'

const SailorSchema = mongoose.Schema({
  name: { type: String, required: true },
})

export default mongoose.model('Sailor', SailorSchema)
