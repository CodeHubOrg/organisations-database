import React, { Component } from 'react'
import { Link } from 'react-router'

class Admin extends Component {

    render() {
        const { store } = this.context
        return (
            <div>
                <h1>JavaScript tools and resources</h1>
		<h4>Find everything you need to get started with Javascript</h4>
                <div className="container-admin">
                    <h2>Admin</h2>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                    </ul>
                </div>
            </div>
        ) 
    }

}

// error is thrown if contextTypes is set in constructor
Admin.contextTypes = {
    store: React.PropTypes.object
}

export default Admin
