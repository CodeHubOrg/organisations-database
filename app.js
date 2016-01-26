"use strict";

let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

app.use("/components",express.static(__dirname + '/public/components'));
app.use("/css", express.static(__dirname + '/public/css'));
app.use("/lib", express.static(__dirname + '/public/lib'));
app.use("/bundle.js", express.static(__dirname + '/public/bundle.js'));
app.use("/client-app.js", express.static(__dirname + '/public/client-app.js'));

let repository = new (require("./models/Repository.js"))();

app.get('/', function(req, res){
    res.sendFile('index.html',{root:__dirname});
});

app.get("/Organisations.json",function(req,res){
    res.send(repository.organisationRepository.fetchAll());
});


app.listen(port, function() {
  console.log('Listening on port ' + port)
});