import React from 'react'
import MenuExampleBasic from '../components/navbar' 

export default (props) => {
    return (
        <div>
            {<MenuExampleBasic />}
            {props.children}
        </div>
    )
}