"use strict";

var React = require('react'),
    ReactDOM = require('react-dom'),
    OrganisationActionCreator = require('../actionCreators/organisationActionCreator'),
    OrganisationStore = require('../stores/organisationStore');


//The individual rows in the organisations table
var OrganisationListRow = React.createClass({
    rowClicked: function(event) {
         if (!this.props.selected) {
             OrganisationActionCreator.selectOrganisation(this.props.id);
         } else {
             OrganisationActionCreator.deselectOrganisation(this.props.id);
         }
    },
    render: function() {
        var className = "";
        if (this.props.selected) {
            className = "info";
        }
        return (
            <tr  className={className} onClick={this.rowClicked}>
                <td>{this.props.name}</td>
                <td>{this.props.id}</td>

            </tr>
        );
    }
});

//The whole organisations table
var OrganisationList = React.createClass({
    render: function() {
        var rows = [];

        this.props.organisations.forEach(function(organisation) {
            rows.push(<OrganisationListRow id={organisation.id}
                                           name={organisation.name}
                                           selected={organisation.selected}
                                           key={organisation.id} />);
        }.bind(this));

        return (
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
});


//A separate panel to show which organisation is selected
var OrganisationSelectionPanel = React.createClass({
    render : function() {
        var selectedOrganisationName = this.props.selectedOrganisation !== null ? this.props.selectedOrganisation.name : "None selected";

        return (
            <div className="well">
                <h3>Selected Organisation</h3>
                <p>{selectedOrganisationName}</p>
            </div>
        )
    }
});

//The main app container
var MainApp = React.createClass({
    getInitialState: function(){
         return {
            organisations: OrganisationStore.getAll(),
            selectedOrganisation : OrganisationStore.getSelected()
        };
    },
    componentDidMount: function() {
        OrganisationStore.bind( 'change', this.changed );
    },
    componentWillUnmount: function() {
        OrganisationStore.unbind( 'change', this.changed );
    },

    changed: function(event) {
        this.setState({organisations:OrganisationStore.getAll()});
        this.setState({selectedOrganisation: OrganisationStore.getSelected()});
    },

    render : function() {
        return (
            <div>
                <h1>Bristol local business Directory</h1>
                <p>Click an organisation below to select it</p>
                <OrganisationList organisations={this.state.organisations} />
                <OrganisationSelectionPanel selectedOrganisation={this.state.selectedOrganisation} />
            </div>
        );
    }
});

module.exports = MainApp;