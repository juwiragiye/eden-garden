const express = require('express');
const logger = require('volleyball');

const app = express();

app.use(logger);
app.use(express.json());

module.exports = app;
