import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchToken } from '../../../actions'
import { browserHistory } from 'react-router'


class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            'loggedIn': false,
            'user': {}
        }
        console.log("loggedIn", this.state.loggedIn)
        this.logout = this.logout.bind(this)
    }
    logout(e){   
        e.preventDefault()
        localStorage.removeItem("authtoken")
        this.setState({'loggedIn': false})
        console.log(localStorage)
        browserHistory.push('/profile/')
    }
    componentDidMount(){
        if(this.props.gitHubUser){
            this.props.fetchToken(this.props.gitHubUser)
              .then(
                (data) => {
                //console.log("fetched data", data)
                localStorage.setItem("authtoken", data.token)
                if(data.token != ''){
                   this.setState({
                    'user': data.user, 
                    'loggedIn': true
                  }) 
                }
            })
        }
    }
    render () {
        let loggedIn = (this.state.loggedIn) ? 'Log out' : 'Login with Github'
        const user = this.state.user
        return (
            <div>
                { (this.state.loggedIn) ? 
                <span> 
                <p>You are now logged in, @{user.username} </p>
                <h3>Your Profile Data</h3>
                Name: {user.name}<br />
                Username: @{user.username}<br />
                Email: {user.email}<br />
                <p>&nbsp;</p>
                <a href="/profile/">
                    <div className="btn" id="login-btn">                       
                        <p>{loggedIn}</p>
                    </div>
                </a> 
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
    if(ownProps.params.id){       
        return {
            'gitHubUser': ownProps.params.id
        }
    }
    return {}
}

export default connect(mapStateToProps, {fetchToken})(Profile)