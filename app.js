import express from 'express'
import mongoose from 'mongoose'
import Sailor from './models/Sailor.js'

const app = express()

mongoose
  .connect(
    'mongodb+srv://jason_bdd_WCS:jason@cluster0.v16lt6g.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))

app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})

app.post('/api/names', (req, res, next) => {
  const sailor = new Sailor({
    ...req.body,
  })
  sailor
    .save()
    .then(() => res.status(201).json({ message: 'nom sauvegardé' }))
    .catch((error) => res.status(400).json({ error }))
})

app.get('/api/names', (req, res) => {
  Sailor.find()
    .then((sailors) => res.status(200).json({ sailors }))
    .catch((error) => res.status(404).json({ error }))
})

export default app
