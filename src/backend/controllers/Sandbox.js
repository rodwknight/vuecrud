/*import {server} from  '../../serve'
import Sandbox from '../models/Sandbox'

server.get('/auth').intercept((req, res) => {
  res.status(200) // coloca o status que você quer retornar
  res.json(Sandbox.data) // o retorno da API
})

server.put('/auth').intercept((req, res) => {
  // se quiser ver o que chegou no servidor da pra printar a req aqui
  var body = JSON.parse(req.body);
  Sandbox.data.splice(0, 1, body)
  res.status(200)
  res.json(Sandbox.data)
})

server.stop()*/
