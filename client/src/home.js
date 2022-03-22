import React from 'react';
import ReactDOM from 'react-dom';
import {Card,CardGroup} from 'react-bootstrap';


function Title()
{
    const myStyle={

backgroundImage: "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('https://static01.nyt.com/images/2020/04/12/business/10View-illo/10View-illo-videoSixteenByNineJumbo1600.jpg')",
backgroundRepeat:'no-repeat',
width:'100%',
height:'450px',
color:'white',
display:'flex',
alignItems:'center',
justifyContent:'center',
fontSize:67,
position:'absolute',

};   return (
     <div style={myStyle}>
        <div ><strong>ONLINE TUTOR PORTAL</strong> </div>
         </div>
    );
}
function Features()
{
    return(
        <CardGroup>
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Access Enrolled Courses and Timetable</Card.Title>
    <Card.Text>
      Students can easily access enrolled courses and timetable
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Classes and Study material</Card.Title>
    <Card.Text>
      Students can attend classes aon gmeet and easily access study material.
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Discuss Doubts</Card.Title>
    <Card.Text>
      Students can discuss doubts with the teachers on doubt forum
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Rate Tutor</Card.Title>
    <Card.Text>
      Students can rate and review their tutors.
    </Card.Text>
  </Card.Body>
</Card>
</CardGroup>
    );

}
export  {Title,Features};

