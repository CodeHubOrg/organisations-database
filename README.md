![Travis CI badge](https://travis-ci.org/CodeHubOrg/organisations-database.svg?branch=master)

# CodeHub JavaScript Resources Project

This app was started as part of CodeHub's JS101 group, in order to work together on a project and practise using new JavaScript technologies.    

The original idea was to display a list of independent shops in Bristol, then we decided to keep it more generic and called it Organisations Database. But since, we have switched its purpose to display JavaScript resources and the generic term which is used in the app is now just Item.     

## Technologies used
* Node/Express
* React
* Redux
* Webpack
* LokiJS

The app is by now mostly written in ES2015.

## Getting started

* You'll need a recent copy of node from: https://nodejs.org/
* Run: `npm install` to install dependencies.

Currently there are two different build processes in place, one for building the app, so you can afterwards run it in dev mod with hot module replacement working, and one for building the app to run in production. (There is probably a better way of configuring webpack, so you would not need to different steps, but for the moment I am glad HMR is working at all!)

To enable HMR, 
* Run: `npm run buildHMR`, then 
* Run: `npm run dev` to run the app and view it on http://localhost:3000

For running in production mode:
* Run: `npm run build` to build static assets in a production mode
* Run: `npm run start` to run the app and view it on http://localhost:8080

Help:
- The app was originally based on the todomvc example: https://github.com/reactjs/redux/tree/master/examples/todomvc

**Contributors**

Too many to name individually, but key contributers include:    
Katja Durrani & Gicela Morales (organisers of CodeHub)      
Paul Grimshaw (founder of this project in its original form: Items Database)   
Michael Gray (initiator of backend using lokiJS)    
Dave Thomson (initiator of frontend using React and Redux)  
Anne Kotecha (continuing React and Redux work on frontend)  
