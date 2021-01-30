import { Team } from '../../models/team';
import { CreateTeamResponse } from '../../models/create-team-response';
import { teamsService } from '../teams';
import { WATFORD_ITEM, NOTTINGHAM_FOREST_ITEM } from '../../constants';

it('Retrieves a list of teams', async () => {
  const teams: Team[] = await teamsService.fetchTeams();
  expect(Array.isArray(teams)).toBeTruthy();
  expect(teams.length).toBe(20);
});

it('Retrieves a team by its name', async () => {
  const { name, img } = WATFORD_ITEM;
  const team: Team = await teamsService.findTeamByName(name);
  expect(team).not.toBeNull();
  expect(team.name).toBe(name);
  expect(team.img).toBe(img);
});

it('Creates a team if it does not exist', async () => {
  const teamResponse: CreateTeamResponse = await teamsService.createTeam(NOTTINGHAM_FOREST_ITEM);
  const { name, img } = NOTTINGHAM_FOREST_ITEM;
  expect(teamResponse).not.toBeNull();
  expect(teamResponse.status).toBe(201);
  expect(teamResponse.team).not.toBeNull();
  expect(teamResponse.team.name).toBe(name);
  expect(teamResponse.team.img).toBe(img);
});

it('Tries to create an existing team', async () => {
  const teamResponse: CreateTeamResponse = await teamsService.createTeam(WATFORD_ITEM);
  const { name, img } = WATFORD_ITEM;
  expect(teamResponse).not.toBeNull();
  expect(teamResponse.status).toBe(200);
  expect(teamResponse.team).not.toBeNull();
  expect(teamResponse.team.name).toBe(name);
  expect(teamResponse.team.img).toBe(img);
});
