import { Polly } from '@pollyjs/core';
import Item from './models/Items'

const {server: ItemRest} = new Polly('testing', {
  adapters: ['xhr'],
  persister: 'local-storage'
});

ItemRest.get('/items/').intercept((req, res) => {

  res.status(200) // coloca o status que você quer retornar
  res.json(Item.data) // o retorno da API
})

ItemRest.post('/items/add').intercept((req, res) => {
  // se quiser ver o que chegou no servidor da pra printar a req aqui

  Item.data.push(JSON.parse(req.body));

  res.status(200)
  res.json(Item.data)
})
