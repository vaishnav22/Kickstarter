import React, { Component} from 'react'
import {Form, Button, Message, Input, Icon, Grid} from 'semantic-ui-react'
import Kickstarter from '../blockchain/kickstarter'
import web3 from '../blockchain/web3'
import {Router} from '../routes'

class DonateForm extends Component {
    state = {
        value: '',
        spinner: false,
        error: ''
    }

    onSubmit = async () => {
        event.preventDefault();

        const kickstarter = Kickstarter(this.props.address)

        this.setState({spinner: true,error:''})

        try {
            const accounts = await web3.eth.getAccounts();
            await kickstarter.methods.donate().send({
                from: accounts[0],
                value: this.state.value
        })
        Router.replaceRoute(`/kickstarter/${this.props.address}`)
        } catch (e) {
            this.setState({error: e.message})
        }

        this.setState({spinner: false, value:''})
    }

    render() { 
        return (
            <Form size="big" onSubmit={this.onSubmit} warning={!!this.state.error}>
                        <Form.Field required>
                            <label size="large">Donate to this project</label>
                            <Input label={{ basic: true, content: 'wei' }} labelPosition='right' placeholder='Enter amount...' value={this.state.value} onChange={e => this.setState({value: e.target.value})}/>
                        </Form.Field>
                        <Button animated='fade' size="large" loading={this.state.spinner} color="black">
                            <Button.Content visible>Donate</Button.Content>
                            <Button.Content hidden>
                                <Icon name='rocket' />
                            </Button.Content>
                        </Button>
                        <Message warning header="Error!" content={this.state.error} />
                        
            </Form>
        )
    }
}

export default DonateForm;