import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory, Link } from 'react-router'

import { loginUserToken } from '../../../actions'

class Login extends Component {
  render() {
    const credentials = this.props.params.credentials;
    const params = {};
    credentials.split('&').map(term => {
      const [key, val] = term.split('=');
      params[key] = val;
    });
    const token = params['access-token'];
    this.props.loginUserToken(token);
    browserHistory.push('/');
    return(
      <div>Login Callback: <em>{token}</em></div>
    );
  }
}

export default connect(null, {loginUserToken})(Login);
