import React, { useState } from 'react'

import { Container,Button, Table, Row, Col, Form } from 'react-bootstrap'
import { Footer, Navbar } from "../components";

const ContactUs = () => {

    const employee= {
        name: '',
        age: null,
        address: ''
    }



//////  we want to add   new tr in into table with dynamic data which is comming from form
////  center loading
///   error  - This api IS wonr 


    const getUserData = () => {
        const savedEmp = localStorage.getItem('emp');  
        return savedEmp ? JSON.parse(savedEmp) : employee;
    };
    
    const [emp, setEmp] = useState(getUserData()); // react hook 

    const saveUserData = () => {
        localStorage.setItem('emp', JSON.stringify(emp))
    };

    return (
        <>

<Navbar />
          <div className='backpic' >
            <h1>Contact</h1>
            <Row>
                <Col >
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{emp.name}</td>
                                <td>{emp.age}</td>
                                <td>{emp.address}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <h1 className='get'>Get In Touch</h1>
                    <Form onSubmit={() => saveUserData() }  >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={emp.name} onChange={(e) => setEmp({...emp , name: e.target.value})}/>
                 
       </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Enter phone" value={emp.age} onChange={(e) => setEmp({...emp, age: e.target.value})}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Message</Form.Label>
                            <Form.Control type="" placeholder="Enter Your Message" value={emp.address} onChange={(e) => setEmp({...emp, address: e.target.value})}/>
                        </Form.Group>
                        <Button variant='danger' type='submit'>Submit</Button>
                    </Form>
                </Col>
            </Row>
            <br/>
            <Container className='text-white'>
        <div><h2 className="head">OUR CONTACT INFORMATION </h2></div><hr/>
        <div  style={{display:"flex"}}> <h4>CUSTOMER CARE</h4></div>
        <div  style={{display:"flex"}}><h6>via Call:</h6> <p className='abut'>0307-5620090</p></div>
        <div  style={{display:"flex"}}><h6>via e-mail:</h6> <p className='abut'>nabeelusman786edf@gmail.com</p></div>
        <div  style={{display:"flex"}}><h6>Operational Days:</h6> <p className='abut'>Monday-Saturday</p></div>
        <div  style={{display:"flex"}}><h6>Operational Hours:</h6> <p className='abut'>9:00 AM-6:00 PM</p></div>
        <div  style={{display:"flex"}}><h6>Address:</h6> <p className='abut'>Shama , ichra maqbool road, , Lahore</p></div>
     
      </Container>
   
      </div>  
      <Footer />
        </>
    
    );
}

export default ContactUs