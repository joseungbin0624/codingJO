import React from 'react';
import { Card } from 'react-bootstrap';

const CustomCard = ({ title, description, children }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {children}
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
