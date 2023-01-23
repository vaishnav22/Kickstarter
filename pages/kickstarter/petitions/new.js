import React, { Component } from 'react'
import Blueprint from '../../../components/Blueprint'
import {Form,Button, Message, Input, Icon} from 'semantic-ui-react'
import web3 from '../../../blockchain/web3'
import Kickstarter from '../../../blockchain/kickstarter'
import {Link, Router} from '../../../routes'
import styles from '../../../css/petitionNew.module.css'
import { ThermostatOutlined } from '@mui/icons-material'


class NewPetition extends Component {
    state = {
        description: '',
        price: '',
        recipientAddress: '',
        loading: false,
        errorMessage: ''
    }

    static async getInitialProps(props) {
        const {address} = props.query
        return {address}
    }

    onSubmit = async event => {
        event.preventDefault()
        const kickstarter = Kickstarter(this.props.address)
        const {description, price, recipientAddress} = this.state
        this.setState({loading: true, errorMessage: ''})
        try {
            const accounts = await web3.eth.getAccounts()
            await kickstarter.methods.createProposal(description, price, recipientAddress).send({from: accounts[0]})
            Router.pushRoute(`/kickstarter/${this.props.address}/petitions`)
        } catch (e) {
            this.setState({errorMessage: e.message})
        }

        this.setState({loading: false})
    }


    render() {
        return (
            <Blueprint>
                <div className={styles.body}>
                    <h2>Create new Petition</h2>
            <Form onSubmit={this.onSubmit} warning={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Description</label>
                    <Input value={this.state.description} onChange={event => this.setState({description: event.target.value})} />
                </Form.Field>

                <Form.Field>
                    <label>Price</label>
                    <Input  value={this.state.price} onChange={event => this.setState({price: event.target.value})} />
                </Form.Field>

                <Form.Field>
                    <label>Recipient address</label>
                    <Input value={this.state.recipientAddress} onChange={event => this.setState({recipientAddress: event.target.value})} />
                </Form.Field>

                <Button animated='fade' size="large" color="black" loading={this.state.loading}>
                            <Button.Content visible>Create</Button.Content>
                            <Button.Content hidden>
                                <Icon name='rocket' />
                            </Button.Content>
                        </Button>
                        <Message warning header="Sorry" content={this.state.errorMessage} />
            </Form>
            </div>
            </Blueprint>
        )
    }
}

export default NewPetition