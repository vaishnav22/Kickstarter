import React, { Component } from 'react'
import { Button, Menu, Icon } from 'semantic-ui-react'
import {Link} from '../routes'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() { 
    const { activeItem } = this.state

    return (
      <Menu borderless size='large' inverted icon fixed='top'>
        <Link route="/">
          <Menu.Item
            name='bitcoin'
          >
            <Icon name='bitcoin' />
          </Menu.Item>
        </Link>

        <Menu.Item
          name='editorials'
        >
          Kickstarter
        </Menu.Item>

          <Menu.Item position='right'>
          <Link route="/kickstarter/createKickstarter">
            <Button animated>
              <Button.Content visible>Create</Button.Content>
              <Button.Content hidden>
                <Icon name='mouse pointer' />
              </Button.Content>
            </Button>
            </Link>
          </Menu.Item>
      </Menu>
    )
  }
}
