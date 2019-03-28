// server.js
var cors = require('cors');
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
 

server.use(cors())
//server.use(middlewares)
//server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})