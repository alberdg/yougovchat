import { Request, Response, Router } from 'express';
import { CreateTeamResponse } from '../../models/create-team-response';
import { teamsService } from '../../services/teams';
import { NotFoundError } from '../../errors/not-found-error';
import { body } from 'express-validator';
import { validateRequest } from '../../middlewares/validate-request'
const router = Router();

router.post('/teams',[
  body('name')
    .not()
    .isEmpty()
    .withMessage('Name is required'),
  body('img')
    .notEmpty()
    .withMessage('Image is required'),
],
validateRequest,
async (req: Request, res: Response) => {
  const teamResponse: CreateTeamResponse = await teamsService.createTeam(req.body);
  const { status, team } = teamResponse;
  if (!team) {
    throw new NotFoundError();
  }
  res.status(status).send(team);
});
export { router as createTeamRouter };
