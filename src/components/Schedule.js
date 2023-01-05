import React from 'react';
import { Container, Alert} from 'react-bootstrap';

const Schedule = () => {
    return <>
    <Container>
    <h2 className='text-center py-3'>Schedule details</h2>
    <Alert key="info" variant="info">
    <h6>No schedules available yet. Please, keep checking this page for updates or any changes to current schedules.</h6>
    </Alert>
    </Container>
    </>
}

export default Schedule;