import React, { Component } from 'react'
import Blueprint from '../../components/Blueprint'
import Kickstarter from '../../blockchain/kickstarter'
import { Card, Container } from 'semantic-ui-react'
import styles from '../../css/kickstarterCard.module.css'

class KickstarterShow extends Component {
    static async getInitialProps(props) {
        const kickstarter = Kickstarter(props.query.address)
        const summary = await kickstarter.methods.getDetails().call()
        // console.log(summary)
        return {
            initialPool: summary[0],
            balance: summary[1],
            petitions: summary[2],
            donerCount: summary[3],
            admin: summary[4],
            name: summary[5]
        }
    }

    cardGroup() {
        const { balance, admin, initialPool, petetions, donersCount, name } = this.props;
        const items = [
            {
                header: name,
                meta:admin,
                description: 'The manager create this project, check for contributers and also other important information',
                style: {overflowWrap:'break-word'}
            }
        ]

        return <Card.Group items={items} />
    }

    render() {
        return (
            <Blueprint>
                <div className={styles.body}>
                {this.cardGroup()}
                </div>
            </Blueprint>
        )
    }
}

export default KickstarterShow