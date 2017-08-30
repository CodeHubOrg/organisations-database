module.exports = function(app){    
    var passport = require('passport')
    var GitHubStrategy = require('passport-github').Strategy;
    var session = require('express-session');
    var options = require('../appConfig');

    // var User = require('../models/users');

    app.use(session({secret:'tswift', resave: true, saveUninitialized: true}))

    //Initialize passport and restore authentication state if available
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new GitHubStrategy({
        clientID: options.GITHUB_CLIENT_ID || process.env.CLIENT_ID,
        clientSecret: options.GITHUB_CLIENT_SECRET || process.env.CLIENT_SECRET,
        callbackURL: '/auth/github/callback',
      },
      function(accessToken, refreshToken, user, cb) {
          console.log("using GITHUB strategy")
          return cb(null, user);
      }
    ));

    // Check this re saving to a session, serialize and deserialize 
    // https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize#27637668
    passport.serializeUser(function(user, done) {
      console.log("user", user);
        done(null, user.id);
      // done(null, user);
    });

    passport.deserializeUser(function(id, done) {
      done(null, user);
    });

    //OAuth authentication route
    app.get('/auth/github', passport.authenticate('github'));
    app.get('/auth/github/callback', 
      passport.authenticate('github', { failureRedirect: '/' }), 
      function(req, res) {
      res.redirect('/profile');
    });
}