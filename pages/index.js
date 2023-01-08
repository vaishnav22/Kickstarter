import React, { Component } from 'react'
import factory from '../blockchain/factory'
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import CardExampleColumnCount from '../components/semantic-ui_card'
import styles from '../css/index.module.css'
import Blueprint from '../components/Blueprint'
import { Link } from '../routes'

class KickstarterLanding extends Component {

    static async getInitialProps() {
        const kickstarter = await factory.methods.getDeployedKickstarters().call();
        return { kickstarter }
    }

    renderData() {
        const items = this.props.kickstarter.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/kickstarter/${address}`}>
                        <a>View</a>
                    </Link>
                )
            }
        })

        return <div>{items.map(CardExampleColumnCount)}</div>
        // return <Card.Group  centered items={items} />
    }

    render() {
        return (
            <Blueprint>
                <div className={styles.body}>
                    <h2>Current open projects</h2>
                    {this.renderData()}
                </div>
            </Blueprint>
        )
    }
}

export default KickstarterLanding