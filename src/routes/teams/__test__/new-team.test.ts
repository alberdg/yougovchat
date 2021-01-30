import request, { Response } from 'supertest';
import { WATFORD_ITEM, NOTTINGHAM_FOREST_ITEM } from '../../../constants';
import { app } from '../../../app';

it('Returns a 201 if the team does not exist', async () => {
  const response: Response = await request(app)
    .post('/teams')
    .send(NOTTINGHAM_FOREST_ITEM)
    .expect(201);
  expect(response.body).not.toBeNull();
  expect(response.body).toEqual(NOTTINGHAM_FOREST_ITEM);
});

it('Returns a 200 if the team does not exist', async () => {
  const response: Response = await request(app)
    .post('/teams')
    .send(WATFORD_ITEM)
    .expect(200);
  expect(response.body).not.toBeNull();
  expect(response.body).toEqual(WATFORD_ITEM);
});
