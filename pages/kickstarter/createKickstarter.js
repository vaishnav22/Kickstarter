import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Form, Input } from 'semantic-ui-react'
import Blueprint from '../../components/Blueprint'
import styles from '../../css/createKickstarter.module.css'
import { Button, Icon } from 'semantic-ui-react'

class KickstarterNew extends Component {
    render() {
        return (
            <Blueprint>
                <div className={styles.body}>
                    <h1>Create your own Kickstarter</h1>

                    <Form size="big">
                        <Form.Field inline required>
                            <label size="large">Enter Minimum Amount for the Kickstarter</label>
                            <Input label={{ basic: true, content: 'wei' }} labelPosition='right' placeholder='Enter amount...'/>
                        </Form.Field>
                        <Button animated='fade' size="large">
                            <Button.Content visible>Initiate Kickstarter</Button.Content>
                            <Button.Content hidden>
                                <Icon name='rocket' />
                            </Button.Content>
                        </Button>
                    </Form>
                </div>
                
            </Blueprint>
        )
    } 
}

export default KickstarterNew