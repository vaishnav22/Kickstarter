import React from 'react'
import MenuExampleBasic from '../components/navbar' 
import {Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default (props) => {
    return (
        <div>
            {<MenuExampleBasic />}
            <Container>
            {props.children}
            </Container>
        </div>
    )
}