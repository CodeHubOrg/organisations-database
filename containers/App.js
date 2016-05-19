import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrganisationList from '../components/OrganisationList'

export class App extends Component {

    render() {
        console.log(this.props.organisations)
        return (
            <div>
                <h1>Organisations Database</h1>
                <OrganisationList organisations={this.props.organisations} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    organisations: state.organisations
  }
}

export default connect(
    mapStateToProps
)(App)
