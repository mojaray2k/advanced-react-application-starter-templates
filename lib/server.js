import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', /* async */ (req, res) => {
  // const initialContent = await serverRender();
  res.render('index', { answer: 85 }/* , { ...initialContent } */);
});

app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}...`);
});
