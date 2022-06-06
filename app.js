const express = require('express');
const loggingMiddleware = require('./middleware/logger');
const studentRouter = require('./students/routes');

const app = express();

const port = 3000;

app.use(express.json());

app.get('/', loggingMiddleware, (req, res) => {
  res.send('Hello, world');
});

app.use('/students', studentRouter);

app.listen(port, () => {
  console.log('App listening on port: ' + port);
});
