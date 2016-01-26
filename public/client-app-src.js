"use strict";

var ReactDispatcher = require('flux-react-dispatcher');
var Dispatcher = new ReactDispatcher();

Dispatcher.dispatch({
    eventName: 'appStarted',
    startTime: Date.now() // example data
});


