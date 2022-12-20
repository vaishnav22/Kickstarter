import React, { Component } from 'react'
import { Button, Menu, Icon } from 'semantic-ui-react'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu borderless size='large' inverted icon fixed='top'>
        <Menu.Item
          name='bitcoin'
          active={activeItem === 'bitcoin'}
          onClick={this.handleItemClick}
        >
          <Icon name='bitcoin' />
        </Menu.Item>

        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          Kickstarter
        </Menu.Item>

        <Menu.Item position='right'>
          <Button animated>
            <Button.Content visible>Create</Button.Content>
            <Button.Content hidden>
              <Icon name='mouse pointer' />
            </Button.Content>
          </Button>
        </Menu.Item>
      </Menu>
    )
  }
}
