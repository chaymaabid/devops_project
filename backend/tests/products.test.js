import request from 'supertest';
import app from '../server.js';

describe('GET /api/products', () => {
  it('should return status 200', async () => {
    const response = await request(app).get('/api/products');
    expect(response.statusCode).toBe(200);
  });
});
