module.exports = function(router){ 
  const passport = require('passport')
  const config = require('../appConfig')
  const jwt = require('jwt-simple')
  const JwtStrategy = require('passport-jwt').Strategy
  const ExtractJwt = require('passport-jwt').ExtractJwt
  const User = require('../auth-models/users')

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
}
