import React, { Component } from 'react'
import factory from '../blockchain/factory'
import Card from '../components/RenderCard'


class KickstarterLanding extends Component {

    static async getInitialProps() {
        const kickstarter = await factory.methods.getDeployedKickstarters().call();
        return { kickstarter }
    }


    renderData() {
        const items = this.props.kickstarter.map(address => {
            return {
                header: address,
                description: 'temp'
            }
        })

        return <div>{items.map(Card)}</div>
    }


    render() {
        return (
            <div>{this.renderData()}</div>
        )
    }
}

export default KickstarterLanding