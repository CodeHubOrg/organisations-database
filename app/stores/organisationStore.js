"use strict";

var Dispatcher = require('../dispatcher'),
    MicroEvent = require('../lib/microevent');


var OrganisationStore = {
    //Dummy list, should be populated by ajax call to server
    organisations: [{name:"Beatroot Cafe","id":1, selected:false},{name:"Bike Workshop","id":2, selected:false},{name:"Zero Degrees",id:3,selected:false}],

    getAll: function() {
        return this.organisations;
    },
    getSelected: function() {
        var selectedOrganisation = null;
        this.organisations.forEach(function(organisation){
           if (organisation.selected){
               selectedOrganisation = organisation;
           } ;
        });
        return selectedOrganisation;
    },
    changeSelection: function(organisationId){
        for (var i = 0; i < this.organisations.length; i++) {
            if (this.organisations[i].id === organisationId) {
                this.organisations[i].selected = true;
            } else {
                this.organisations[i].selected = false;
            }
        }
    },
    deselectAll: function() {
        this.organisations.forEach(function(organisation){
            organisation.selected = false;
        });
    },
    addNew: function(organisation) {
        this.organisations.push(organisation);
    },
    edit: function(organisation) {
        this.organisations[organisation.id -1] = organisation;
    },
    remove: function(organisation) {
        // @todo
    }
};

//Add microevent to organisation store
MicroEvent.mixin(OrganisationStore );

//Wire up dispatcher to store
Dispatcher.register( function( payload ) {

    switch( payload.eventName ) {

        case 'organisationSelected':
            OrganisationStore.changeSelection(payload.organisationId);
            OrganisationStore.trigger( 'change' );
            break;

        case "organisationDeselected":
            OrganisationStore.deselectAll();
            OrganisationStore.trigger( 'change' );
            break;
    }

    return true; // Needed for Flux promise resolution

});

module.exports = OrganisationStore;
