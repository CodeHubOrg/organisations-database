const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + '/public')));



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