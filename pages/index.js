import React, { Component } from 'react'
import factory from '../blockchain/factory'
import Card from '../components/Card'


class KickstarterLanding extends Component {

    static async getInitialProps() {
        const kickstarter = await factory.methods.getDeployedKickstarters().call();
        return { kickstarter }
    }


    render() {
        const items = this.props.kickstarter.map(address => {
            return {
                header: address,
                description: 'temp'
            }
        })
        return (
            <div>
                {items.map((data) => <Card items={data} />)}
            </div>
        )
    }
}

export default KickstarterLanding