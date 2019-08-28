const {itemStore} = require('../../src/store/index')

describe('init testes', () => {

  const axios = {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn()
  }
  const {actions} = itemStore(axios)
  const commit = jest.fn()
  const dispatch = jest.fn()

  const fakeItem = {
    _id: 1,
    name: 'Item01',
    price: '10',
    color: 'Verde'
  }

  const state = {
    item: {
      name: 'Item01',
      price: '10',
      color: 'Verde'
    }
  }

  afterEach(() => {
    commit.mockReset()
    dispatch.mockReset()
  })

  describe('actions', () => {
    it('Busca lista de Items', async () => {
      axios.get.mockImplementation(() => {
        return {data: [fakeItem]}
      })
      await actions.fetchItems({commit})
      expect(commit).toBeCalledWith('attItem', [fakeItem])
    })
    it('Adiciona Item', async () => {
      axios.post.mockImplementation(() => {
        return { data: fakeItem}
      })
      await actions.addItemAction({state, commit})
      expect(commit).toBeCalledWith('attItem', fakeItem)
    })
    it('Atualizar Item', async () => {
      axios.put.mockImplementation(() => {
        return { data: fakeItem }
      })
      await actions.editItemAction({state, commit})
      expect(commit).toBeCalledWith('attItem', fakeItem)
    })
  })
})
