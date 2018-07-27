const proxy = require('http-proxy-middleware');
const Bundler = require('parcel-bundler');
const express = require('express');

const bundler = new Bundler('./client/public/index.html');
const app = express();

app.use(
  '/api',
  proxy({
    target: 'http://localhost:3000',
  }),
);

app.use(bundler.middleware());

app.listen(Number(process.env.PORT || 1234), () => console.log('\nFired 🔥  Up On http://localhost:1234'));
