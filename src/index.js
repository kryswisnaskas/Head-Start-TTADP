import app from './app';

const port = process.env.PORT || 3001;

// start server
app.listen(port, () => {
  // TODO: add a logging message
  console.log(`Listening on port ${port}!`);
});
