import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './CheckOut.css'

const CheckOut = () => {
    return (
        <div className='checkout p-5 row'>
            <div className="col-md-4 col-sm-12"></div>
            <div className="col-md-4 col-sm-12">
                <h1>Checkout</h1>
                <div className="w-100 m-auto" >
                    <Form className=''>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter your name" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" placeholder="Phone Number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Address</Form.Label>

                            <div className=" d-flex">
                                <Form.Control type="text" placeholder="Address" className='w-50' />
                                <Form.Control type="text" placeholder="City" className='w-50' />
                            </div>

                        </Form.Group>

                        <Button variant="success" type="submit" className='w-75'>
                            Register
                        </Button>
                    </Form>
                </div>
            </div>
            <div className="col-md-4 col-sm-12"></div>

        </div>
    );
};

export default CheckOut;