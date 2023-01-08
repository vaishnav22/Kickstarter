import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Form, Input, Message } from 'semantic-ui-react'
import Blueprint from '../../components/Blueprint'
import styles from '../../css/createKickstarter.module.css'
import { Button, Icon } from 'semantic-ui-react'
import {Link, Router} from '../../routes'
import factory from '../../blockchain/factory'
import web3 from '../../blockchain/web3'

class KickstarterNew extends Component {
    state = {
        error:'',
        minAmount: '',
        loading: false
    }

    onSubmit = async () => {
        event.preventDefault();

        this.setState({loading: true, error: ''})

        try {
        const accounts = await web3.eth.getAccounts();
        await factory.methods.createKickstarter(this.state.minAmount).send({
            from: accounts[0]
        })
        Router.pushRoute('/')
        } catch (e) {
            this.setState({error: e.message })
        }

        this.setState({loading: false})
    }

    render() {
        return (
            <Blueprint>
                <div className={styles.body}>
                    <h1>Create your own Kickstarter</h1>

                    <Form size="big" onSubmit={this.onSubmit} warning={!!this.state.error}>
                        <Form.Field inline required>
                            <label size="large">Enter Minimum Amount for the Kickstarter</label>
                            <Input label={{ basic: true, content: 'wei' }} labelPosition='right' placeholder='Enter amount...' value={this.state.minAmount} onChange={e => this.setState({minAmount: e.target.value})}/>
                        </Form.Field>
                        <Button animated='fade' size="large" loading={this.state.loading} color="black">
                            <Button.Content visible>Initiate Kickstarter</Button.Content>
                            <Button.Content hidden>
                                <Icon name='rocket' />
                            </Button.Content>
                        </Button>
                        <Message warning header="Sorry" content={this.state.error} />
                    </Form>
                </div>
                
            </Blueprint>
        )
    } 
}

export default KickstarterNew