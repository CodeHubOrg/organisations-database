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
    const tokenForUser = (user) => {
      const timestamp = new Date().getTime()
      return jwt.encode({ sub: user.id, iat: timestamp }, config.secret)
    }
    const jwtOptions = {
      jwtFromRequest: ExtractJwt.fromHeader('authorization'),
      secretOrKey: config.secret
    }

    const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
      // see if user ID in payload exists in database
      User.sync().then(() => {
        return User.findOne({ where: { github_id: payload.sub } })
        .then(user => { 
          if(user) {
            console.log("hooray")
            done(null, user) 
          } else {
            done(null, false)
          }
        })
        .catch((err) => {done(err, false)})
      })
    })
    passport.use(jwtLogin)



    // Github Strategy for initial login
    passport.use(new GitHubStrategy({
        clientID: config.GITHUB_CLIENT_ID || process.env.CLIENT_ID,
        clientSecret: config.GITHUB_CLIENT_SECRET || process.env.CLIENT_SECRET,
        callbackURL: '/auth/github/callback',
      },
      function(accessToken, refreshToken, user, cb) {
          //console.log("using GITHUB strategy")

          return cb(null, user);
      }
    ));

    //OAuth authentication route
    router.get('/auth/github', passport.authenticate('github'));
    router.get('/auth/github/callback', 
      passport.authenticate('github', { session: false, failureRedirect: '/' }), 
      function(req, res) {
        const user = req.user;
        // console.log("keys", Object.keys(req))   - good method!
        // console.log("request user", user)
        // console.log("token", tokenForUser(req.user));
        User.sync().then(() => {
          return User.findOrCreate(
          { where: {
              github_id: user.id
            }, defaults: {
              name: user.displayName, 
              username: user.username, 
              email: user._json.email
            }
          }).spread((user, created) => {
            console.log(user.get({
              plain: true
            }))            
            res.redirect('/profile/'+user.username)
            //res.json({ token: tokenForUser(user) });
        })       
      })
    })

    // app.use(authRoutes)

}