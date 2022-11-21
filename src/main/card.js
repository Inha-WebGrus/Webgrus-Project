import Card from 'react-bootstrap/Card';
import React from 'react';
import './main.css'

function BasicExample() {
  return (
    <Card className='Card'>
      <Card.Img variant="top" className='CardImg'
        src="/cupcakes-gb1928ac49_640.jpg" />
      <Card.Body style={{textAlign: 'left'}}>
        <Card.Title className='CardTitle'>인하대 베이커리 맛집</Card.Title>
        <Card.Text className='CardText'>디저트</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;