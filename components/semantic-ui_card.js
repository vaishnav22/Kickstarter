import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import styles from '../css/card.module.css'

// const description = [
//   'Amy is a violinist with 2 years experience in the wedding industry.',
//   'She enjoys the outdoors and currently resides in upstate New York.',
// ].join(' ')

const CardExampleExtraContent = (data, index) => (
  <Card key={index} className={styles.card}>
    <Card.Content header={'Kickstarter ' + index}/>
    <Card.Content description={data.header} className={styles.card_description}/>
    <Card.Content extra>
      <Icon name='user' />4 contribution
    </Card.Content>
  </Card>
)

export default CardExampleExtraContent


