import React, {Component} from 'react'
import Blueprint from '../../../components/Blueprint'
import styles from '../../../css/petiton.module.css'
import {Button, Icon, Table} from 'semantic-ui-react'
import {Link} from '../../../routes'
import Kickstarter from '../../../blockchain/kickstarter'
import TablePetition from '../../../components/TablePetition'

class Petition extends Component {
    static async getInitialProps(props) {
        const {address} = props.query
        const kickstarter = Kickstarter(address)
        const petitonCount = await kickstarter.methods.getPetetionsCount().call()
        const donersCount = await kickstarter.methods.donersCount().call()

        const petitions = await Promise.all(
            Array(parseInt(petitonCount)).fill().map((ele, index) => {
                return kickstarter.methods.petitions(index).call()
            })
        )

        console.log(petitions);
        return {address, petitions, petitonCount, donersCount}
    }

//helper function
    displayPetition() {
        return this.props.petitions.map((petition, index) => {
            return <TablePetition key={index} id={index} petition={petition} address={this.props.address} donersCount={this.props.donersCount}/>
        })
    }

    render() {

        //es 2015 
        const {Header, Row, HeaderCell, Body} = Table

        return (
            <Blueprint>
                <div className={styles.body}>
                <h1>Petitions</h1>
                <Link route={`/kickstarter/${this.props.address}/petitions/new`}>
                    <a>
                    <Button animated='fade' size="large" color="black">
                            <Button.Content visible>Create Petition</Button.Content>
                            <Button.Content hidden>
                                <Icon name='edit outline' />
                            </Button.Content>
                        </Button>
                    </a>
                </Link>
                </div>
                <Table singleLine>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Price</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approved/Decline</HeaderCell>
                            <HeaderCell>Finalized</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.displayPetition()}
                    </Body>
                </Table>
                
            </Blueprint>
        )
    }
}

export default Petition