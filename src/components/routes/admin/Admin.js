import React, { Component } from 'react'
import { Link } from 'react-router'
import LoginBar from '../auth/LoginBar'

class Admin extends Component {
    componentWillMount(){
        
      }
    render() {
        const { store } = this.context
        return (
            <div>
                <LoginBar />
                <h1>JavaScript tools and resources</h1>
		            <h4>Find everything you need to get started with Javascript</h4>
                <div className="container-admin">
                    <h2>Admin</h2>
                    <ul className="nav-admin">
                        <li><button>View Resources</button></li>
                        <li><Link to={'/new'}><button>Add a Resource</button></Link></li>
                        <li><button>View Categories</button></li>
                    </ul>
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
