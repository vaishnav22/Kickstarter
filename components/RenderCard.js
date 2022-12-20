import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import { render } from 'react-dom';
import '../css/index.module.css'


const BasicCard = (data, index) => {
  // console.log(props.items)
    return (
      <div className='card'>
        <Card style={{ width: '35rem' }} key={index} >
          <Card.Body>
            <Card.Title>Kickstarter</Card.Title>
            <Card.Subtitle className="mb-6 text-muted">Address - </Card.Subtitle>
            <Card.Text>
              {data.header}
            </Card.Text>
            <Button variant="primary">View More</Button>
          </Card.Body>
        </Card>
      </div>
    )
}
// const BasicCard = (props) => {
  
// }

export default BasicCard;