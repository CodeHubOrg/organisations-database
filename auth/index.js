module.exports = function(router){ 
    const passport = require('passport')
    const GitHubStrategy = require('passport-github').Strategy
    const config = require('../appConfig')
    const jwt = require('jwt-simple')
    const JwtStrategy = require('passport-jwt').Strategy
    const ExtractJwt = require('passport-jwt').ExtractJwt

    const User = require('../auth-models/users')

    router.use(passport.initialize())

    // JWT strategy
    const tokenForUser = (userid) => {
      const timestamp = new Date().getTime()
      return jwt.encode({ sub: userid, iat: timestamp }, config.secret)
    }
    const jwtOptions = {
      jwtFromRequest: ExtractJwt.fromHeader('authorization'),
      secretOrKey: config.secret
    }

    // Github Strategy for initial login
    // beware, when deployed the callback needs to be absolute: 'https://resources.javascript101.co.uk/login'
    passport.use(new GitHubStrategy({
        clientID: config.GITHUB_CLIENT_ID || process.env.CLIENT_ID,
        clientSecret: config.GITHUB_CLIENT_SECRET || process.env.CLIENT_SECRET,
        callbackURL: 'https://resources.javascript101.co.uk/login'         
      },
      function(accessToken, refreshToken, user, cb) {
            // console.log("keys", Object.keys(req))   - good method!
            // console.log("request user", user)
            // console.log("token", tokenForUser(req.user));
            const token = tokenForUser(user.id)

            User.sync({force: true}).then(() => {
              return User.findOrCreate(
              { where: {
                  github_id: user.id
                }, defaults: {
                   name: user.displayName, 
                   username: user.username, 
                   email: user._json.email,
                   token: token,
                   loggedIn: false
                }
              }).spread((user, created) => {               
                if(!created){
                  user.update({token: token}) 
                }
              //   console.log(user.get({
              //     plain: true
              // }))
              return cb(null, user);          
              // res.redirect('/profile/'+user.username)
            })       
          })
        }
      ));

    //OAuth authentication route
    router.get("/auth/github", passport.authenticate("github"));
    
    router.get("/login", 
    passport.authenticate("github", { session: false, failureRedirect: "/" }), 
      function(req, res) {
          const user = req.user
          res.redirect("/profile/"+user.github_id)
          // res.json({"authtoken": user.token})
    })

    router.get("/checkUser/:id", function(req, res){
      User.sync().then(() => {
        User.findOne({ where: { github_id: req.params.id} })
          .then((user) => {
            if(user){
            const decoded = jwt.decode(user.token, config.secret)
            const timediff = new Date().getTime() - decoded.iat  
            // console.log("timediff", timediff)
            if(timediff < 20000){
              user.update({loggedIn:true})
              res.send(
                { "user": {
                    "name": user.name,
                    "username": user.username,
                    "email": user.email
                  }, 
                  "token": user.token 
                })
              } 
            }
          }
        ).catch(error => console.log(error))
      })
    })
  
}