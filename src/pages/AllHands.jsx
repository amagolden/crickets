import '../global.css';
import EmployeeMeeting from '../components/employeemeeting';
import AppNavbar from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

let defaultAllHands = [
    {
        id: 1,
        date: '10/11/24',
        topic: 'Employee Benefits',
        isDone: false,
    },
    {
        id: 2,
        date: '9/27/24',
        topic: 'Holiday Support',
        isDone: false,
    },
    {
        id: 3,
        date: '9/13/24',
        topic: 'Regulation',
        isDone: false,
    },
    {
        id: 4,
        date: '8/30/24',
        topic: 'New Product Features',
        isDone: true,
    },
    {
        id: 5,
        date: '8/16/24',
        topic: 'Q3 Goals',
        isDone: true,
    },
    {
        id: 6,
        date: '8/2/24',
        topic: 'Marketing Campaign',
        isDone: true,
    },
  ]

function AllHands() {

    const [meetings, setMeetings] = useState(defaultAllHands);

    return (
    <>
    <AppNavbar />
      <div className="polls-page">
        <h1>Company All Hands</h1>
        <h3>Upcoming</h3>
        {meetings.filter(meeting => !meeting.isDone).map(element => 
          <EmployeeMeeting
            key={element.id}
            id={element.id} 
            date={element.date}
            topic={element.topic}
          />)}
        <h3>Previous</h3>
        {meetings.filter(meeting => meeting.isDone).map(element => 
          <EmployeeMeeting
            key={element.id}
            id={element.id} 
            date={element.date}
            topic={element.topic}
          />)}
      </div>
    </>
  );
}

export default AllHands;
