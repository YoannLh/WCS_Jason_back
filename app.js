import express from 'express'

const app = express()

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

app.post('/api/names', (req, res) => {
  console.log(req.body)
  res.status(201).json({ message: 'nouveau nom créé' })
})

app.get('/api/names', (req, res) => {
  const names = ['coucou', 'salut', 'hello', 'ola', 'loulou', 'pouet']
  res.status(200).json(names)
})

export default app
