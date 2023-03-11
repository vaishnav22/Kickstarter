import React, {Component} from 'react'
import {Table, Button, Icon} from 'semantic-ui-react'
import web3 from '../blockchain/web3'
import Kickstarter from '../blockchain/kickstarter'

class TablePetition extends Component {

    onApprove = async () => {
        const accounts = await web3.eth.getAccounts()
        const kickstarter = Kickstarter(this.props.address)
        await kickstarter.methods.passRequest(this.props.id).send({
            from: accounts[0]
        })
    }

    onFinal = async () => {
        const accounts = await web3.eth.getAccounts()
        const kickstarter = Kickstarter(this.props.address)
        await kickstarter.methods.finalizePetition(this.props.id).send({from: accounts[0]})
    }

    render() {
        return (
            <Table.Row>
                <Table.Cell>{this.props.id}</Table.Cell>
                <Table.Cell>{this.props.petition.description}</Table.Cell>
                <Table.Cell>{this.props.petition.price}</Table.Cell>
                <Table.Cell>{this.props.petition.recipient}</Table.Cell>
                <Table.Cell>{this.props.petition.backerCount}/{this.props.donersCount}</Table.Cell>
                <Table.Cell>
                {this.props.petition.isDone ? null : (
                    <Button animated='fade' color="green" onClick={this.onApprove}>
                            <Button.Content visible>Approve</Button.Content>
                            <Button.Content hidden>
                                <Icon name='check' />
                            </Button.Content>
                    </Button>
                    )}
                </Table.Cell>
                <Table.Cell>
                {this.props.petition.isDone ? null : (
                    <Button animated='fade' color="black" onClick={this.onFinal}>
                            <Button.Content visible>Finalize</Button.Content>
                            <Button.Content hidden>
                                <Icon name='send' />
                            </Button.Content>
                    </Button>
                )}
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default TablePetition