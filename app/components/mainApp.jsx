"use strict";

var React = require('react'),
    ReactDOM = require('react-dom'),
    OrganisationActionCreator = require('../actionCreators/organisationActionCreator'),
    OrganisationStore = require('../stores/organisationStore');


//The individual rows in the organisations table
var OrganisationListRow = React.createClass({
    propTypes: {
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        selected: React.PropTypes.bool.isRequired
    },
    rowClicked: function(event) {
         if (!this.props.selected) {
             OrganisationActionCreator.selectOrganisation(this.props.id);
         } else {
             OrganisationActionCreator.deselectOrganisation(this.props.id);
         }
    },
    render: function() {
        return (
            <tr className={this.props.selected ? "info": ""} onClick={this.rowClicked}>
                <td>{this.props.name}</td>
                <td>{this.props.id}</td>

            </tr>
        );
    }
});

//The whole organisations table
var OrganisationList = React.createClass({
    propTypes: {
        organisations: React.PropTypes.array.isRequired
    },
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
    propTypes: {
        selectedOrganisation: React.PropTypes.object
    },
    render : function() {
        var selectedOrganisationName = this.props.selectedOrganisation !== null ? this.props.selectedOrganisation.name : "None selected";

        return (
            <div className={this.props.selectedOrganisation !== null ? "panel panel-info" : "panel panel-warning" }>
                <div className="panel-heading"> 
                    <h3 className="panel-title">Selected Organisation</h3> 
                </div> 
                <div className="panel-body"> 
                    {selectedOrganisationName}
                </div> 
            </div>
        )
    }
});

// Create an organisation
var OrganisationAdd = React.createClass({
    handleSubmit: function(event) {
        event.preventDefault();

        var form = event.target,
            organisationName = form.querySelector('[name="organisation_name"]').value;

        if (organisationName === '') {
            return;
        }

        OrganisationStore.addNew({
            id: this.props.id,
            name: organisationName,
            selected: false
        });

        this.props.onSubmit();
        form.reset();
    },
    render: function() {
        return (
            <div className="col-xs-6">
                <form onSubmit={this.handleSubmit}>
                    <h4>Add Organisation</h4>
                    <input type="text" name="organisation_name" placeholder="Organisation Name" className="form-control" />
                    <button className="btn btn-primary">Add</button>
                </form>
            </div>
        );
    }
});

// Edit an organisation
// http://buildwithreact.com/article/form-elements
var OrganisationEdit = React.createClass({
    componentDidUpdate: function() {
        this.refs.input.value = this.props.selectedOrganisation.name;
    },
    handleSubmit: function(event) {
        event.preventDefault();

        var form = event.target,
            organisationName = form.querySelector('[name="organisation_name"]').value;

        OrganisationStore.edit({
            id: this.props.selectedOrganisation.id,
            name: organisationName,
            selected: true
        });

        this.props.onSubmit();
    },
    handleDelete: function() {
        OrganisationStore.remove(this.props.selectedOrganisation);
    },
    render: function() {
        if (this.props.selectedOrganisation === null) {
            return null
        }
        return (
            <div className="col-xs-6" id="edit">
                <form onSubmit={this.handleSubmit}>
                    <h4>Edit Organisation</h4>
                    <input type="text" name="organisation_name" placeholder="Organisation name" className="form-control"
                        ref="input"
                        defaultValue={this.props.selectedOrganisation.name}
                     />
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                </form>
            </div>
        );
    }
});

// Backend Admin Page
var Admin = React.createClass({
    render : function() {

        var organisationEdit = this.props.selectedOrganisation ? 
            <OrganisationEdit 
                onSubmit={this.props.onChange} 
                selectedOrganisation={this.props.selectedOrganisation} id="edit" /> 
            : null;

        return (
            <div>
                <h2>Admin</h2>
                <p>Click an organisation below to edit it</p>
                <OrganisationList organisations={this.props.organisations} />
                <div className="panel panel-primary">
                    <div className="panel-heading"> 
                        <h3 className="panel-title">Actions</h3> 
                    </div> 
                    <div className="panel-body"> 
                        <OrganisationAdd onSubmit={this.props.onChange} id={this.props.numOrganisations +1} />
                        <div id="edit-container">
                            { organisationEdit }
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
});

// Frontend Index Page
var Index = React.createClass({
    render : function() {
        return (
            <div>
                <h1>Bristol local business Directory</h1>
                <p>Click an organisation below to select it</p>
                <OrganisationList organisations={this.props.organisations} />
                <OrganisationSelectionPanel selectedOrganisation={this.props.selectedOrganisation} />
            </div>
        );
    }
});

var Nav = React.createClass({
    handleRouteClick: function(route) {
        this.props.onRouteClick(route);
    },
    render : function() {
        var indexIcon =( 
            <span className="glyphicon glyphicon-home" aria-hidden="true"
                onClick={() => this.handleRouteClick('index')}>
            </span>
        ) 
        var adminIcon = ( 
            <span className="glyphicon glyphicon-cog" aria-hidden="true"
                onClick={() => this.handleRouteClick('admin')}>
            </span>
        ) 
        return (
            <div className="pull-right">
                { this.props.route === 'index' ? adminIcon : indexIcon }
            </div>
        );
    }
});

var Router = React.createClass({
    render : function() {
        return (
            <div>
                <Nav onRouteClick={this.props.onRouteClick} route={this.props.route} />
                { 
                    this.props.route === 'admin' ? 
                        <Admin {...this.props} /> :
                        <Index {...this.props} /> 
                }
            </div>
        );
    }
});

//The main app container
var MainApp = React.createClass({
    getInitialState: function(){
         return {
            organisations: OrganisationStore.getAll(),
            numOrganisations: OrganisationStore.getAll().length,
            selectedOrganisation : OrganisationStore.getSelected(),
            route: 'index'
        };
    },
    componentDidMount: function() {
        OrganisationStore.bind( 'change', this.changed );
    },
    componentWillUnmount: function() {
        OrganisationStore.unbind( 'change', this.changed );
    },
    changed: function(event) {
        this.setState({
            organisations:OrganisationStore.getAll(),
            numOrganisations:OrganisationStore.getAll().length,
            selectedOrganisation: OrganisationStore.getSelected(),
        });
    },
    handleRouteClick: function(route) {
        this.setState({
            route: route
        });
    },
    render : function() {
        return (
            <Router {...this.state} onChange={this.changed} onRouteClick={this.handleRouteClick} />
        );
    }
});

module.exports = MainApp;