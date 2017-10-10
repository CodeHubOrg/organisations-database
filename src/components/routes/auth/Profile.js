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
        let loggedIn = (this.props.loggedIn) ? 'Log out' : 'Log In'
        const user = this.state.user
        return (
            <div>
              <h1>Profile</h1>
              { (this.props.loggedIn) ? 
                <span> 

                { (user.username) ?
                  <span>
                  <p>You are now logged in, @{user.username} </p>
                  <h3>Your GitHub Details:</h3>
                  Name: {user.name}<br />
                  Username: @{user.username}<br />
                  Email: {user.email}<br />
                  <p>&nbsp;</p>
                  <p>
                  <strong>If you just logged in, we will try to redirect you to the Homepage.</strong>
                  </p><p>Otherwise, please choose where you want to go.</p>
                  </span>
                  :
                  <span>
                    <p>You are currently logged in. Where do you want to go?</p>
                  </span>
                }
               
                
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
                <p>Or:</p>
                <div className="login-bar logout left">
                <a onClick={e => this.logout(e)} href="">
                    <div className="btn" id="login-btn">                       
                        <p>{loggedIn}</p>
                    </div>
                 </a> 
                </div>
                </span> :
                <div>
                  <p>You need to be authenticated to access certain pages. Please log in through GitHub.</p>   
                 
                  <div className="login-bar left">    

                    <a  href="/auth/github">
                        <div className="btn" id="login-btn">     
                            <p>{loggedIn}</p>
                        </div>
                    </a> 
                  </div>
                  <ul className="nav navbar-nav under-login">
                    <li className="nav-item">
                      Or: 
                      <Link to={'/'}>Take Me Home</Link>
                    </li>                   
                  </ul>
                </div>
              }

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