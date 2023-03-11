import React, { Component } from 'react'
import factory from '../blockchain/factory'
import { Card } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import CardExampleColumnCount from '../components/semantic-ui_card'
import styles from '../css/index.module.css'
import Blueprint from '../components/Blueprint'
import { Link } from '../routes'
import Kickstarter from '../blockchain/kickstarter'

class KickstarterLanding extends Component {

    static async getInitialProps() {
        const kickstarter = await factory.methods.getDeployedKickstarters().call();
        var dict = []
        let data = await Promise.all(kickstarter.map(async address => {
            var obj = {}
            const getAddress = Kickstarter(address)
            const summary = await getAddress.methods.getDetails().call()
            var v_add = address
            obj[v_add] = summary[5]
            // dict['address'] = address
            // dict['name'] = summary[5]
            dict.push(obj)
            // console.log(data);
        }))

        // console.log(dict[0]);
        return { kickstarter, dict }
    }

    renderData() {
        console.log(this.props.dict);
        const items = this.props.kickstarter.map((address, index) => {
            return {
                header: this.props.dict[index][address],
                // description: `/kickstarter/${address}`,
                description: (
                    <Link route={`/kickstarter/${address}`}>
                        <a>View detail</a>
                    </Link>
                ),
                metadata: address
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