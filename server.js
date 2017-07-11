"use strict";

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

export default app;
