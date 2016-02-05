"use strict";

var Dispatcher = require('../dispatcher');

window.OrganisationActionCreator = {
    selectOrganisation : function (organisationId){
        Dispatcher.dispatch({
            eventName: 'organisationSelected',
            organisationId: organisationId
        });
    },
    deselectOrganisation : function(organisationId){
        Dispatcher.dispatch({
            eventName: 'organisationDeselected',
            organisationId: organisationId
        });
    }
}

module.exports = OrganisationActionCreator;
