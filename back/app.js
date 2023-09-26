require('dotenv').config();
const express = require('express');
const appRouter = require('./routes/index');

const app = express();
const { PORT = 3000 } = process.env;
const { NODE_ENV, DB_CONNECTION } = process.env;

app.use('/', appRouter);

app.listen(PORT);
