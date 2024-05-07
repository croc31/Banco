const express = require('express');
const cors = require('cors');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(cors({
  origin: '*',
}));

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log('<-- Error Handler -->');
  console.log(error);
  response.sendStatus(500);
});

app.listen(3333, () => console.log('⚡ Server started at https://localhost:3333'));
