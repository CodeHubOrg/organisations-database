import React, { Component } from 'react'

class Admin extends Component {

    render() {
        const { store } = this.context
        return (
            <h1>This is the admin area.</h1> 
        ) 
    }

}

// error is thrown if contextTypes is set in constructor
Admin.contextTypes = {
    store: React.PropTypes.object
}

export default Admin
