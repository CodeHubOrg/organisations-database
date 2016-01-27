"use strict";

window.OrganisationStore = {
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
    changeSelection(organisationId){
        for (var i = 0; i < this.organisations.length; i++) {
            if (this.organisations[i].id === organisationId) {
                this.organisations[i].selected = true;
            } else {
                this.organisations[i].selected = false;
            }
        }
    },
    deselectAll() {
        this.organisations.forEach(function(organisation){
            organisation.selected = false;
        });
    }
};

//Add microevent to organisation store
MicroEvent.mixin( window.OrganisationStore );

//Wire up dispatcher to store
window.Dispatcher.register( function( payload ) {

    switch( payload.eventName ) {

        case 'organisationSelected':
            window.OrganisationStore.changeSelection(payload.organisationId);
            window.OrganisationStore.trigger( 'change' );
            break;

        case "organisationDeselected":
            window.OrganisationStore.deselectAll();
            window.OrganisationStore.trigger( 'change' );
            break;
    }

    return true; // Needed for Flux promise resolution

});
