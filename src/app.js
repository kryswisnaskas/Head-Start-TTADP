import express from 'express';
import path from 'path';

const app = express();

app.get('/api', (req, res) => {
  res.send('Hello from ttadp');
});

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'frontend')));
}

module.exports = app;
