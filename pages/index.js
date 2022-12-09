import React, { Component } from 'react'
import factory from '../blockchain/factory'

class KickstarterLanding extends Component {

    static async getInitialProps() {
        const kickstarter = await factory.methods.getDeployedKickstarters().call();
        return { kickstarter}
    }

    render() {
        return <div>{this.props.kickstarter[0]}</div>
    }
}

export default KickstarterLanding