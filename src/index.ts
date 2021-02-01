import { app } from './app';

const PROVIDED_YOUGOV_CHAT_PORT: number = process.env.YOUGOV_CHAT_PORT as any;

if (isNaN(PROVIDED_YOUGOV_CHAT_PORT)) {
  throw new Error('YOUGOV_CHAT_PORT must be numeric');
}

const HTTP_PORT: number = PROVIDED_YOUGOV_CHAT_PORT || 3001;
app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`);
});
