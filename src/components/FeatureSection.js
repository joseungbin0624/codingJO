import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const FeatureSection = ({ features = [] }) => {
  return (
    <Row xs={1} md={2} className="g-4">
      {features.map((feature, index) => (
        <Col key={index}>
          <Card>
            <Card.Img variant="top" src={feature.image} alt={feature.title} />
            <Card.Body>
              <Card.Title>{feature.title}</Card.Title>
              <Card.Text>{feature.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default FeatureSection;
