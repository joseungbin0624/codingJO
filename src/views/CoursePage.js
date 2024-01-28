import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import courseService from '../services/courseService';

const CoursePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const data = await courseService.getCourses();
      setCourses(data);
    };
    fetchCourses();
  }, []);

  return (
    <Container>
      <h1>Courses</h1>
      <Row xs={1} md={2} className="g-4">
        {courses.map(course => (
          <Col key={course.id}>
            <Card>
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CoursePage;
