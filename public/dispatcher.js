"use strict";

var ReactDispatcher = require('flux').Dispatcher;
var Dispatcher = new ReactDispatcher();

Dispatcher.dispatch({
    eventName: 'appStarted',
    startTime: Date.now()
});

module.exports = Dispatcher;

