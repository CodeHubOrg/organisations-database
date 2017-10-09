import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

export default function(ComposedComponent) {
  class RequireAuth extends Component {
    constructor(props){
      super(props)
    }

    componentWillMount() {
      if (!this.props.authenticated) {        
        browserHistory.push('/profile/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        browserHistory.push('/profile/');
      }    
    }
    
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(RequireAuth);
}