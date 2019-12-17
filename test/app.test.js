const request = require('supertest')
const app = require('../app')

describe('get data', () => {
  it('should be successful', async () => {
    const res = await request(app).get('/api/data');
    expect(res.statusCode).toEqual(200);
  })
})
