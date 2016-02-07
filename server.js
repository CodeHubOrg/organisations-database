"use strict";

let webpackDevMiddleware = require("webpack-dev-middleware");
let webpackHotMiddleware = require("webpack-hot-middleware");

let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

// app.use(webpackDevMiddleware(compiler, {
//   hot: true,
//   filename: 'bundle.js',
//   publicPath: '/assets/',
//   stats: {
//     colors: true,
//   },
//   historyApiFallback: true,
// }));
 
// app.use(webpackHotMiddleware(compiler, {
//   log: console.log,
//   path: '/__webpack_hmr',
//   heartbeat: 10 * 1000,
// }));

app.use("/public/", express.static(__dirname + '/public'));



app.get('/', function(req, res){
    res.sendFile('index.html',{root:__dirname});
});

// let repository = new (require("./models/Repository.js"))();
// app.get("/Organisations.json",function(req,res){
//     res.send(repository.organisationRepository.fetchAll());
// });


app.listen(port, function() {
  console.log('Listening on port ' + port)
});