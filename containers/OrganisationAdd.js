import React, { Component } from 'react'
import * as actions from '../actions'

class OrganisationAdd extends Component {
    
    render() {
        const { store } = this.context;
        var val = store.getState().formupdates[0].value;

        let handleInput = (e) => {
           store.dispatch(actions.updateForm(e.target.value, 1));
        }

        let handleSubmit = () => {
            let newName = val,
                xhr = new XMLHttpRequest();
                xhr.open('POST',
                encodeURI('/api/organisations/'));
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify({
                    name: newName, 
                    selected: false
                }));
        };           

        return (
            <div>
            <h1>Add a new resource</h1>
                <form onSubmit={handleSubmit} >                    
                    <input type="text" value={ val } id="1" placeholder="Name of resource" onChange={handleInput} />
    	            <input type="submit" value="Post" />
                </form>
            </div>
        ) 
    }
}

OrganisationAdd.contextTypes = {
    store: React.PropTypes.object    
}

export default OrganisationAdd
