import { Polly } from '@pollyjs/core';

const {server: ItemRest} = new Polly('testing', {
  adapters: ['xhr'],
  persister: 'local-storage'
});

ItemRest.get('/').intercept((req, res) => {
  res.status(200) // coloca o status que você quer retornar
  res.json({Teste : "teste"}) // o retorno da API
})

ItemRest.post('/add').intercept((req, res) => {
  // se quiser ver o que chegou no servidor da pra printar a req aqui
  res.status(200)
  res.json({})
})
