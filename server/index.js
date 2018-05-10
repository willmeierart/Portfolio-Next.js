const express = require('express')
const next = require('next')
const compression = require('compression')
const Router = require('./Router')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const port = process.env.PORT || 3000
const handle = Router.getRequestHandler(app)

app.prepare().then(() => {
  express()
    .use(compression())
    .use(handle)
    .listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
})

// app.prepare().then(() => {
//   const server = express()

//   server.use('/static', express.static('static'))

//   server.get('/', (req, res) => {
//     return app.render(req, res, '/', req.query)
//   })
//   server.get('/art', (req, res) => {
//     return app.render(req, res, '/art', req.query)
//   })
//   server.get('/tech', (req, res) => {
//     return app.render(req, res, '/tech', req.query)
//   })
//   server.get('/about', (req, res) => {
//     return app.render(req, res, '/about', req.query)
//   })
//   server.get('/writing', (req, res) => {
//     return app.render(req, res, '/writing', req.query)
//   })
//   server.get('/process', (req, res) => {
//     return app.render(req, res, '/process', req.query)
//   })

//   server.listen(port, err => {
//     if (err) throw err
//     console.log(`> Ready on http://localhost:${port}`)
//   })
// })
