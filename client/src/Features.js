import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import "./features.css"

function Features() {

  return (
    <CardGroup style={{ display: 'flex', flexDirection: 'row' }}>
      <Card style={{ flex: 1 }} >
        <Card.Body>
          <Card.Title><h1>Access Enrolled Courses and Timetable</h1></Card.Title>
          <Card.Text>
            Students can easily access enrolled courses and timetable
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ flex: 1 }} >
        <Card.Body>
          <Card.Title><h1>Classes and Study material</h1></Card.Title>
          <Card.Text>
            Students can attend classes on gmeet and easily access study material.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ flex: 1 }} >
        <Card.Body>
          <Card.Title><h1>Discuss Doubts</h1></Card.Title>
          <Card.Text>
            Students can discuss doubts with the teachers on doubt forum
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{flex: 1}} >
        <Card.Body>
          <Card.Title><h1>Rate Tutor</h1></Card.Title>
          <Card.Text>
            Students can rate and review their tutors.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Features;