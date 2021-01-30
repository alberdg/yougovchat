import { Request, Response, Router } from 'express';
import { Team } from '../../models/team';
import { teamsService } from '../../services/teams';
import { NotFoundError } from '../../errors/not-found-error';
const router = Router();

router.get('/teams/:name',async (req: Request, res: Response) => {
  const team: Team = await teamsService.findTeamByName(req.params.name);
  if (!team) {
    throw new NotFoundError();
  }
  res.status(200).send(team);
});
export { router as getTeamRouter };
