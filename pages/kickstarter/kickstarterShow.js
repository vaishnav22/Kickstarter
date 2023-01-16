import React, { Component } from 'react'
import Blueprint from '../../components/Blueprint'
import Kickstarter from '../../blockchain/kickstarter'
import { Card, Container, Grid } from 'semantic-ui-react'
import styles from '../../css/kickstarterCard.module.css'
import { style } from '@mui/system'
import web3 from '../../blockchain/web3'
import DonateForm from '../../components/DonateForm'

class KickstarterShow extends Component {

    static async getInitialProps(props) {
        const kickstarter = Kickstarter(props.query.address)
        const summary = await kickstarter.methods.getDetails().call()
        const len = await kickstarter.methods.getPetetionsCount().call()
        // console.log(summary)
        const data = {
            initialPool: summary[0],
            balance: summary[1],
            petitions: summary[2],
            donerCount: summary[3],
            admin: summary[4],
            name: summary[5],
            address: props.query.address
        }

        return data
    }

    cardGroup() {
        const { balance, admin, initialPool, petitions, donerCount, name } = this.props;
        console.log(petitions);
        const items = [
            {
                header: admin,
                meta:'Manager',
                description: 'Manager Address',
                style: {overflowWrap:'break-word'}
            },
            {
                header: balance,
                meta: 'Wei',
                description: 'Total funds for the project till date.',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: initialPool,
                meta: 'Initial contribution',
                description: 'Want to become part of project, contribute to project and access full benifits.',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: petitions,
                meta: 'Number of requests',
                description: 'Number of petitions made for money withdrawel for project.',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: donerCount,
                meta: 'Number of Doners',
                description: 'Number of People who have donated for the project.',
                style: {overflowWrap: 'break-word'}
            }
            

        ]

        return <Card.Group items={items} />
    }

    render() {
        // const { name } = this.props;
        return (
            <Blueprint>
                <div className={styles.body}>
                <h1 className={styles.heading}>{this.props.name}</h1>
                </div>
                <Grid>
                    <Grid.Column width={10}>
                        {this.cardGroup()}
                    </Grid.Column>
                
                    <Grid.Column width={6}>
                        <DonateForm address={this.props.address}/>
                    </Grid.Column> 
                </Grid>
            </Blueprint>
        )
    }
}

export default KickstarterShow