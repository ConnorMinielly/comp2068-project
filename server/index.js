const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/connect');
const apiRouter = require('./routes/routes');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();

const corsOpts = {
  origin: 'http://localhost:1234',
};

mongoose.connect(config.db);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOpts));

app.use('/gradients_api', apiRouter);

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, () => console.log('Listening on port 3000!'));
