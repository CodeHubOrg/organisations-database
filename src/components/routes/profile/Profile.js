import React, { Component } from 'react'
import { Link } from 'react-router'

class Profile extends Component {
    constructor(){
        super()
    }
    render() {
       return (<div>
          <p>This will be the profile.</p>

          <li><Link to="/auth/github">Login with Github</Link></li>
          </div>)
    }
}

export default Profile