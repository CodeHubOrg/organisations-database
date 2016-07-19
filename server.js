"use strict";

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';

import OrgPersist from './backend/stores/orgPersist.js';
const orgpersist = new OrgPersist('resources.json');



// add a resource
// const add = function(resource){
//     return orgpersist.add(resource).then(function(resources){
//         console.log(resources);
//     })
// }
// add({name: 'Eloquent JS'});

// // return all resources
// const get_all = function(){
//     return orgpersist.all().then(function(resources){
//         console.log(resources);
//     });
// }
// get_all();

// // return one resource by id
// const get_by_id = function(num){
//     return orgpersist.byID(num).then(function(resource){
//         console.log(resource);
//     });
// }
// get_by_id(2);



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
app.get("/api/organisations", function(req, res){
    orgpersist.all().then(function(resources){
      res.send(resources);
    })
});

// return resource with a specific id
app.get("/api/organisations/:id", function(req,res){ 
    orgpersist.byID(req.params.id).then(function(resource){
      res.send(resource);
    })
});

// add a resource, then return all resources
app.post("/api/organisations/", jsonParser, function(req,res){
    orgpersist.add(req.body).then(function(resources){
      res.send(resources);
    })
});


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

