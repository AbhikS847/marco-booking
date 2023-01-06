import React, {useState} from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col, Badge} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Booking = () => {

    const [startDate, setStartDate] = useState(Date.now());
    const [time, setTime] = useState('');
  
    return <div>
    <Container>
    <h2 className="text-center py-3">Make a booking</h2>
    <Form style={{padding:16, margin:8,border:'3px solid #eaeaea'}}>
    <Row style={{padding:16}}>
        <h2 style={{color:"#1da179"}}>Details</h2>
        <Col xs={12} sm={4}>
        <Form.Group className="mb-3" controlId="firstname">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" />
      </Form.Group>
        </Col>
        <Col xs={12} sm={4}>
        <Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" />
      </Form.Group>
        </Col>
        <Col xs={12} sm={3}>
        <Form.Group className="mb-3" controlId="phonenumber">
        <Form.Label>Phone number <Badge bg="primary">Optional</Badge></Form.Label>
        <Form.Control style={{WebkitAppearance:'none'}} type="number" placeholder="Enter phone number" />
      </Form.Group>
        </Col>
        <Row>
        <Col xs={12} sm={6}>
        <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address <Badge bg="primary">Required</Badge></Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
        *A calendar invite will be sent to you through your email account*
        </Form.Text>
      </Form.Group>
        </Col>
        <Col xs={12} sm={6}>
        <Form.Group className="mb-3" controlId="location">
        <Form.Label>Location <Badge bg="primary">Required</Badge></Form.Label>
        <Form.Control type="text" placeholder="Enter your location" required />
        <Form.Text className="text-muted">
        *Location to drop off or pickup items*
        </Form.Text>
      </Form.Group>
        </Col>
    </Row>
    <Row>
        <Col xs={12} sm={6}>
        <Form.Group className="mb-3" controlId="date">
        <Form.Label>Date</Form.Label>
        <ReactDatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} required minDate={Date.now()}/>
        <Form.Text className="text-muted">
        *Please select a date*
        </Form.Text>
      </Form.Group>
        </Col>
        <Col xs={12} sm={6}>
        <Form.Group className="mb-3" controlId="time">
        <Form.Label>Time</Form.Label>
        <ReactDatePicker className="form-control" selected={time} onChange={(newTime) => setTime(newTime)} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time"
      dateFormat="h:mm aa" required/>
        <Form.Text className="text-muted">
        *Please select a time*
        </Form.Text>
      </Form.Group>
        </Col>
    </Row>
    <Row>
      <Col>
      <Form.Group className="mb-3" controlId="textarea">
      <Form.Label>Description</Form.Label>
      <Form.Control className="form-control" style={{height:150}} as="textarea" aria-label="With textarea" />
      <Form.Text className="text-muted">
      *You can describe your delivery details here. For example, the items, weight and other important information.*
        </Form.Text>
      </Form.Group>
      </Col>
    </Row>
    <Row>
        <Col className="text-center" xs={12} s={6}>
        <Button className='d-sm-none w-100' variant="primary" type="submit">
        Submit
      </Button>
        </Col>
        <Col className="d-flex justify-content-center" xs={12} s={6}>
        <Button style={{width:"30%"}} className='d-none d-sm-block' variant="primary" type="submit">
        Submit
      </Button>
        </Col>
    </Row>
    </Row>
    </Form>
    </Container>
    </div>
}

export default Booking;