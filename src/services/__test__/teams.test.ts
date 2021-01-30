import { Team } from '../../models/team';
import { teamsService } from '../teams';

it('Retrieves a list of teams', async () => {
  const teams: Team[] = await teamsService.fetchTeams();
  expect(Array.isArray(teams)).toBeTruthy();
  expect(teams.length).toBe(20);
});
