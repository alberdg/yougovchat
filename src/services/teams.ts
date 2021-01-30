import axios, { AxiosResponse } from 'axios';
import { Team } from '../models/team';
import { CreateTeamResponse } from '../models/create-team-response';
const TEAMS_GIST_URL: string = 'https://gist.githubusercontent.com/joaofs/a6b80ce482de2f3846a00e72c0497a35/raw/07b62f4971dcdb11895a3138e6f0a91aeeea1036/football.json';

class TeamsService {
  private _teams: Map<string,Team>;

  constructor () {
    this._teams = new Map();
  }

  async fetchTeams(): Promise<Team[]> {
    if (this._teams.size === 0) {
      const response: AxiosResponse<Team[]> = await axios(TEAMS_GIST_URL);
      if (response && response.data) {
        response.data.map(team => this._teams.set(team.name.toLowerCase(), team));
      }
    }
    return Array.from(this._teams.values());
  }

  async findTeamByName (team: string): Promise<Team> {
    if (!team) {
      return null!;
    }
    await this.fetchTeams();
    const lowerCaseTeam: string = team.toLowerCase();
    return this._teams.get(lowerCaseTeam)!;
  }

  async createTeam (team: Team): Promise<CreateTeamResponse> {
    if (!team) {
      return null!;
    }
    const { name } = team;
    const teamFound: Team = await this.findTeamByName(name);
    if (teamFound) {
      return { status: 200, team: teamFound };
    }
    this._teams.set(name.toLowerCase(), team);
    return { status: 201, team };
  }

  async updateTeam (team: Team) : Promise<Team> {
    if (!team) {
      return null!;
    }
    const { name } = team;
    const teamFound: Team = await this.findTeamByName(name);
    if (teamFound) {
      this._teams.set(name.toLowerCase(), team);
      return team;
    }
    return null!;
  }
}

export const teamsService: TeamsService = new TeamsService();
