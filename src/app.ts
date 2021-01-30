import express, { Request, Response } from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.all('*', async (req: Request, res: Response) => {
  console.log('Error!!!');
  res.status(404).send(`Could not find ${req.url}`);
});

export { app };
