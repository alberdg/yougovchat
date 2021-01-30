import request, { Response } from 'supertest';
import { NOTTINGHAM_FOREST_ITEM, UPDATED_WATFORD_ITEM } from '../../../constants';
import { app } from '../../../app';

it('Returns a 404 if the team does not exist', async () => {
  await request(app)
    .patch('/teams')
    .send(NOTTINGHAM_FOREST_ITEM)
    .expect(404);
});

it('Returns a 200 if the team exists', async () => {
  const response: Response = await request(app)
    .patch('/teams')
    .send(UPDATED_WATFORD_ITEM)
    .expect(200);
  expect(response.body).not.toBeNull();
  expect(response.body).toEqual(UPDATED_WATFORD_ITEM);
});
