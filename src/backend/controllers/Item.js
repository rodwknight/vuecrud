import Item from '../models/Items'
import {server} from '../../serve'

server.get('/items').intercept((req, res) => {
  res.status(200) // coloca o status que você quer retornar
  res.json(Item.data) // o retorno da API
})

server.get('/items/:_id').intercept((req, res) => {
  res.status(200) // coloca o status que você quer retornar
  var arr = Item.data.filter((a) => { return a._id == req.params._id});
  res.json(arr) // o retorno da API
})

server.post('/items').intercept((req, res) => {
  // se quiser ver o que chegou no servidor da pra printar a req aqui
  var body = JSON.parse(req.body);

  Item.data.push({
    _id : Item.data.length + 1,
    name: body.name,
    price: body.price,
    color: body.color
  });

  res.status(200)
  res.json(Item.data)
})

server.delete('/items/:_id').intercept((req, res) => {
  // se quiser ver o que chegou no servidor da pra printar a req aqui
  const i = Item.data.findIndex(item => item._id === req.params._id)
  Item.data.splice(i, 1)
  res.status(200)
  res.json(Item.data)
})
server.put('/items').intercept((req, res) => {
  // se quiser ver o que chegou no servidor da pra printar a req aqui
  var body = JSON.parse(req.body);

  const index = Item.data.findIndex(item => item._id === body._id)
  Item.data.splice(index, 1, body)
  res.status(200)
  res.json(Item.data)
})
