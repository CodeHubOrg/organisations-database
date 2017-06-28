import { express, Router } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import api from './backend/api';
import ItemPersist from './backend/stores/itemPersist.js';
const itempersist = new ItemPersist('./backend/data/itemDB.js');

const router = Router();

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// return all resources
router.get("/api/items", function(req, res){
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
router.get("/api/items/:id", function(req,res){ 
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
router.put("/api/items/:id", jsonParser, function(req,res){ 
   
   itempersist.update(req.body).then(
     function(resource){
       res.send(resource);
     },
     function(error){
        console.log(error.message);
     }
   )
});

// delete by id
router.delete("/api/items/:id", function(req, res){
  itempersist.deleteByID(req.params.id).then(
    function(resources){
      res.send(resources);
    },
    function(error){
        console.log(error.message);
    }
  )
})

// add a resource, send back "No content"
router.post("/api/items/", jsonParser, function(req,res){
    // console.log("body", req.body)
    itempersist.add(req.body).then(
      function(newitem){
        // console.log("Resources", newitem)
        res.send(newitem)
      }
    ).catch(console.log)
});

router.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

export default router;
