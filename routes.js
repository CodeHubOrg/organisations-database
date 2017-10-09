import { express, Router } from 'express';
import path from 'path';
import auth from './auth';
import passport from 'passport';
import bodyParser from 'body-parser';
import api from './backend/api';
import ItemPersist from './backend/stores/itemPersist';
import User from './auth-models/users'
import config from './appConfig'
import jwt from 'jwt-simple'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'


const itempersist = new ItemPersist('./backend/data/itemDB.js');

const router = Router();

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.use(bodyParser.json());
router.use(urlencodedParser);

auth(router)

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
}

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
    User.sync().then(() => {
      return User.findOne({ where: { github_id: payload.sub } })
      .then(user => { 
        if(user) {
          return done(null, user) 
        } else {
          return done(null, false)
        }
      })
      .catch((err) => {done(err, false)})
    })
  })
  passport.use(jwtLogin)

  const requireAuth = passport.authenticate("jwt",{ session: false })


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
router.put("/api/items/:id", requireAuth, jsonParser, function(req,res){    
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
router.delete("/api/items/:id", requireAuth, function(req, res){
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
router.post("/api/items/", requireAuth, jsonParser, function(req,res){
    // console.log("body", req.body)
    itempersist.add(req.body).then(
      function(newitem){
        // console.log("Resources", newitem)
        res.send(newitem)
      }
    ).catch(console.log)
});


// need the wildcart so react-router can take over
// see https://codedump.io/share/V9K5oTL502r4/1/issue-with-routing-in-react-app
router.get("*", function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

export default router;
