"use strict";

var ReactDispatcher = require('flux').Dispatcher;
window.Dispatcher = new ReactDispatcher();

window.Dispatcher.dispatch({
    eventName: 'appStarted',
    startTime: Date.now()
});


