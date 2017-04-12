const Wall = require('../')

describe('main', () => {
  const api = new Wall()

  it('search', () => {
    return api.search('attack on titans')
      .then(result => {
        expect(result.end).toBe(false)
      })
  })

  it('details', () => {
    return api.details(34562)
      .then(result => {
        expect(result.size).toBe('549.6 KiB')
      })
  })

  it('not found', () => {
    return api.details(3456234)
      .catch(err => {
        expect(err.response.status).toBe(404)
      })
  })
})
