import express, { Request, Response } from 'express';
import { json } from 'body-parser';
import helmet from 'helmet';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';
import { indexTeamsRouter } from './routes/teams';
const app = express();
app.use(json());
app.use(helmet());
app.use(indexTeamsRouter);

app.all('*', (req: Request, res: Response) => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
