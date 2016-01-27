"use strict";

window.OrganisationActionCreator = {
    selectOrganisation : function (organisationId){
        window.Dispatcher.dispatch({
            eventName: 'organisationSelected',
            organisationId: organisationId
        });
    },
    deselectOrganisation : function(organisationId){
        window.Dispatcher.dispatch({
            eventName: 'organisationDeselected',
            organisationId: organisationId
        });
    }
}
