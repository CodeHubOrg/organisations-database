"use strict";

import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';

import LokiPersist from './backend/stores/lokiPersist.js';
import Organisations from './backend/stores/organisations.js';
const lokipersist = new LokiPersist('resources.json');


let resources = new Organisations(lokipersist.db);
console.log("pre", resources.orgs);
// resources.add({name: "JS Ninja"});
// console.log("after", resources.orgs);
// lokipersist.save();

const app = express();
const port = 3000

const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get("/organisations", function(req, res){
    res.send({"test": "Test property"})
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

export default app;

