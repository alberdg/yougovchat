import request, { Response } from 'supertest';
import { app } from '../../../app';

it('Can fetch a list of teams', async () => {
  const teams: Response = await request(app)
    .get('/teams')
    .send()
    .expect(200);
  expect(teams.body.length).toEqual(20);
});


it('Returns a 404 if route does not exist', async () => {
  await request(app)
    .get('/teams/noteam')
    .send()
    .expect(404);
})
