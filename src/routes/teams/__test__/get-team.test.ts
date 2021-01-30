import request, { Response } from 'supertest';
import { WATFORD_ITEM } from '../../../constants';
import { app } from '../../../app';

it('Returns a 404 if the team does not exist', async () => {
  await request(app)
    .get('/teams/noteam')
    .send()
    .expect(404);
});

it('Fetches an existing team ignoring case sensitiveness', async () => {
  const response: Response = await request(app)
    .get('/teams/watford')
    .send()
    .expect(200);
  expect(response).not.toBeNull();
  expect(response.body).toEqual(WATFORD_ITEM);
});
