"use strict";

import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';
import routes from './routes';
import auth from './auth';

const app = express();
const port = 3000;

const compiler = webpack(config)
app.use(express.static(path.join(__dirname + '/public')));

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: '/public' }))
app.use(webpackHotMiddleware(compiler));

app.use(routes);


app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

export default app;
