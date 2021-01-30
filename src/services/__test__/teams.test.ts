import { Team } from '../../models/team';
import { teamsService } from '../teams';
import { WATFORD_ITEM } from '../../constants';

it('Retrieves a list of teams', async () => {
  const teams: Team[] = await teamsService.fetchTeams();
  expect(Array.isArray(teams)).toBeTruthy();
  expect(teams.length).toBe(20);
});


it('Retrieves a team with case sensitive', async () => {
  const team: Team = await teamsService.findTeam('watford');
  const { name, img } = WATFORD_ITEM;
  expect(team).not.toBeNull();
  expect(team.name).toBe(name);
  expect(team.img).toBe(img);
})
