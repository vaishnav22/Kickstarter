import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import { render } from 'react-dom';


const BasicCard = (props) => {
  console.log(props.items)
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Kickstarter</Card.Title>
            <Card.Subtitle className="mb-6 text-muted">Address - </Card.Subtitle>
            <Card.Text>
              {props.items.header}
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