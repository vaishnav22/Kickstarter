import React from 'react'
import { Card, Image, Button, Container } from 'semantic-ui-react'
import styles from '../css/card.module.css'


// const description = [
//   'Amy is a violinist with 2 years experience in the wedding industry.',
//   'She enjoys the outdoors and currently resides in upstate New York.',
// ].join(' ')

const CardExampleExtraContent = (data, index) => (
  <div className={styles.container}>
    <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>{data.header}</Card.Header>
        <Card.Meta>No. of contributers</Card.Meta>
        <Card.Description>
          {data.metadata}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            {data.description}
          </Button>
        </div>
      </Card.Content>
    </Card>
    </Card.Group>
  </div>
  
)

export default CardExampleExtraContent


