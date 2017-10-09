import React, { Component } from 'react'
import { loginUser,logoutUser } from '../../../actions'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';

class LoginBar extends Component {
  constructor(props){
    super(props)
    this.logout = this.logout.bind(this)
  }
  logout(e) {
    if (this.props.loggedIn) {
      e.preventDefault()
      this.props.logoutUser()
    } 
  }
  render() {
    let loggedIn = (this.props.loggedIn) ? 'Log Out' : 'Log in with GitHub'
    return (this.props.loggedIn) ?
     (<div>
        <a onClick={e => this.logout(e)} href="">
            <div className="btn" id="login-btn">                       
                <p>{loggedIn}</p>
            </div>
         </a> 
        </div>

      ) :
      (
         <div>
         <a  href="/auth/github">
              <div className="btn" id="login-btn">                       
                  <p>{loggedIn}</p>
              </div>
          </a>
          </div>
      )

  }
}

const mapStateToProps = (state) => {
  return {
    'loggedIn': state.auth.authenticated
  }
} 

export default connect(mapStateToProps,{loginUser, logoutUser})(LoginBar);

