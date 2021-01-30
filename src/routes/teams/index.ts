import { Request, Response, Router } from 'express';
import { Team } from '../../models/team';
import { teamsService } from '../../services/teams';

const router = Router();

router.get('/teams', async (req: Request, res: Response) => {
  const teams: Team[] = await teamsService.fetchTeams();
  res.send(teams);
});
export { router as indexTeamsRouter };
