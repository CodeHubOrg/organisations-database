import React, { Component } from 'react'
import { connect } from 'react-redux'
import {login, logout, checkLogin} from '../../../actions'
import {browserHistory} from 'react-router'


class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            'loggedIn': false,
            'users': this.props.users
        }
        console.log("loggedIn", this.state.loggedIn)
        this.logout = this.logout.bind(this)
    }
    logout(){
        if(this.props.gitUser){
            this.props.logout(this.props.gitUser)
            this.setState({'loggedIn': false})
            this.browserHistory('/') 
        }
    }
    componentDidMount(){
        if(this.props.gitUser){
            this.props.login(this.props.gitUser)            
            if (this.state.users.find(
                (user) => user.username === this.props.gitUser
            )){                
                this.setState({'loggedIn': true})               
            }
        }
    }
    render () {
        let loggedIn = (this.state.loggedIn) ? 'Log out' : 'Login with Github'
        const user = this.props.gitUser
        return (
            <div>
                { (this.state.loggedIn) ? 
                <span> 
                <p>You are now logged in, {user} </p>
                <a href="/profile">
                    <div className="btn" id="login-btn">                       
                        <p>{loggedIn}</p>
                    </div>
                </a> 
                </span> :       
                <a onclick={this.logout} href="/auth/github">
                    <div className="btn" id="login-btn">                       
                        <p>{loggedIn}</p>
                    </div>
                </a> }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    if(ownProps.params.github_id){
        return {
            'gitUser': ownProps.params.github_id,
            'users': state.users
        }
    }
    return {}
}

export default connect(mapStateToProps, {login, logout})(Profile)