import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser, logoutUser } from '../../../actions'
import { browserHistory, Link } from 'react-router'


class Profile extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
        this.state = {
            'user': {}
        }
    }
    logout(e){   
        e.preventDefault()
        this.props.logoutUser()
    }
    renderAlert() {
      if (this.props.error){
        return (
            <div className="alert alert-danger">
              <strong>Oops!</strong>{this.props.error}
            </div>
          )
      }
    }
    componentWillMount(){
        if(this.props.gitHubUser){
          this.props.loginUser(this.props.gitHubUser)
            .then(
              (data) => {
                  this.setState({
                  'user': data.user
                })
            })
        }
    }
    render () {
        let loggedIn = (this.props.loggedIn) ? 'Log out' : 'Login with Github'
        const user = this.state.user
        return (
            <div>
                { (this.props.loggedIn) ? 
                <span> 
                { (user != {}) ?
                  <span>
                  <p>You are now logged in, @{user.username} </p>
                  <h3>Your Profile Data</h3>
                  Name: {user.name}<br />
                  Username: @{user.username}<br />
                  Email: {user.email}<br />
                  <p>&nbsp;</p>
                  </span>
                  :
                  <p>&nbsp;</p>
                }
                <a onClick={e => this.logout(e)} href="/profile/">
                    <div className="btn" id="login-btn">                       
                        <p>{loggedIn}</p>
                    </div>
                </a> 
                <br />
                <nav className="navbar navbar-light">
                  <ul className="nav navbar-nav">
                    <li className="nav-item">
                       <Link to={'/'}>Home</Link>
                    </li>
                    <li className="nav-item">
                       <Link to={'/admin'}>Admin</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/new'}>Add new Item</Link>
                    </li>
                  </ul>
                </nav>
                </span> :       
                <a  href="/auth/github">
                    <div className="btn" id="login-btn">                       
                        <p>{loggedIn}</p>
                    </div>
                </a> }

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const gitHubUser = (ownProps.params.id) ? ownProps.params.id : ''
    return {
      'gitHubUser': gitHubUser,
      'loggedIn': state.auth.authenticated,
      'error': state.auth.error
    }
}

export default connect(mapStateToProps, {loginUser, logoutUser})(Profile)