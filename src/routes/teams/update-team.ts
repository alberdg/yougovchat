import { Request, Response, Router } from 'express';
import { Team } from '../../models/team';
import { teamsService } from '../../services/teams';
import { NotFoundError } from '../../errors/not-found-error';
import { body } from 'express-validator';
import { validateRequest } from '../../middlewares/validate-request'
const router = Router();

router.patch('/teams',[
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
  const team: Team = await teamsService.updateTeam(req.body);
  if (!team) {
    throw new NotFoundError();
  }
  res.status(200).send(team);
});
export { router as updateTeamRouter };
