import React from 'react';
import { Container, Alert, Table} from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState} from 'react';

const Schedule = () => {

    const [schedules, setSchedules] = useState([]);

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];  

    useEffect(() => {
        const getSchedules = async() => {
            try{
                const response = await axios.get('http://localhost:5000/booking');
                setSchedules(response.data);
            }
            catch(error){
                console.log(error);
            }
        };

        getSchedules();
    },[])

    return <>
    <Container>
    <h2 className='text-center py-3'>Marco's Schedule</h2>
    {schedules.length === 0 ? 
        <Alert key="info" variant="info">
    <h6>No schedules available yet. Please, keep checking this page for updates or any changes to current schedules.</h6>
    </Alert> :<>
    <Table size="sm" bordered>
    <thead className="text-center">
        <tr style={{backgroundColor:'#24dba4', color:'#fff', fontWeight:'lighter'}}>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody className="text-center">
      {schedules.map((schedule) => {
        return (<tr key={schedule._id}>
            <td className="py-3">{schedule.date.slice(0,2)} {monthNames[schedule.date.slice(3,4) - 1]} {schedule.date.slice(5,10)}</td>
            <td className="py-3">{schedule.time} {schedule.time.slice(0,2) > 12 ? "PM" : "AM" }</td>
        </tr>)
      })}
      </tbody>
    </Table>
    </>
    }
    </Container>
    </>
}

export default Schedule;