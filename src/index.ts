import { app } from './app';

const HTTP_PORT: number = process.env.YOUGOV_CHAT_PORT as any || 3001;
app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`);
});
