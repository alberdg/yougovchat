import axios, { AxiosResponse } from 'axios';
import { Team } from '../models/team';
import { CreateTeamResponse } from '../models/create-team-response';
const TEAMS_GIST_URL: string = 'https://gist.githubusercontent.com/joaofs/a6b80ce482de2f3846a00e72c0497a35/raw/07b62f4971dcdb11895a3138e6f0a91aeeea1036/football.json';

class TeamsService {
  private _teams: Team[];

  constructor () {
    this._teams = null!;
  }


  async fetchTeams(): Promise<Team[]> {
    if (!Array.isArray(this._teams)) {
      const response: AxiosResponse<Team[]> = await axios(TEAMS_GIST_URL);
      if (response && response.data) {
        this._teams = response.data;
      }
    }
    return this._teams
  }

  async findTeamByName (team: string): Promise<Team> {
    if (!team) {
      return null!;
    }
    await this.fetchTeams();
    const lowerCaseTeam: string = team.toLowerCase();
    return this._teams.find((team: Team) => team.name.toLowerCase() === lowerCaseTeam)!;
  }

  async createTeam (team: Team): Promise<CreateTeamResponse> {
    if (!team) {
      return null!;
    }
    const teamFound: Team = await this.findTeamByName(team.name);
    if (teamFound) {
      return { status: 200, team: teamFound };
    }
    this._teams.push(team);
    return { status: 201, team };
  }


}

export const teamsService: TeamsService = new TeamsService();
