import React, {Component} from 'react'
import Blueprint from '../../../components/Blueprint'
import styles from '../../../css/petiton.module.css'
import {Button, Icon} from 'semantic-ui-react'
import {Link} from '../../../routes'

class Petition extends Component {
    static async getInitialProps(props) {
        const {address} = props.query

        return {address}
    }
    render() {
        return (
            <Blueprint>
                <div className={styles.body}>
                <h3>Petitions</h3>
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
                
            </Blueprint>
        )
    }
}

export default Petition