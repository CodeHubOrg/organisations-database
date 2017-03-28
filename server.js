"use strict";

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import api from './backend/api';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';

import ItemPersist from './backend/stores/itemPersist.js';
const itempersist = new ItemPersist('./backend/data/itemDB.js');

const app = express();
const port = 3000;

// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const compiler = webpack(config)
// app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(express.static(path.join(__dirname + '/public')));

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler));



// return all resources
app.get("/api/items", function(req, res){
      itempersist.all().then(
      function(resources){
        res.send(resources);
      },
      function(error){
        console.log(error.message);
      }
    )
});

// return resource with a specific id
app.get("/api/items/:id", function(req,res){ 
    itempersist.byID(req.params.id).then(
      function(resource){
        res.send(resource);
      },
      function(error){
        console.log(error.message);
      }
    )
});

// update resource with given id
app.put("/api/items/:id", jsonParser, function(req,res){ 
   itempersist.update(req.body).then(
     function(resources){
       res.send(resources);
     },
     function(error){
        console.log(error.message);
     }
   )
});

// // add a resource, then return all resources
app.post("/api/items/", jsonParser, function(req,res){
    itempersist.add(req.body).then(
    function(resources){
      res.sendStatus(204);
      //res.send(resources);
    })
});

// console.log(app)

app.get("*", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})


app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

export default app;

