import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignIn.css'

const SignIn = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6 form p-5">
                    <Form className='w-50 m-auto'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Text className="text-muted">
                                We'll never share your Password with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" className='w-100'>
                            Sign In
                        </Button>
                        <p>
                            New to Yoga-Pro? <Link to='/signup'>Create an account</Link>
                        </p>
                        <div className="p-3 or">or</div>
                        <Button variant="light" type="submit" className='w-100'>
                            <img src="/image/google.png" alt="" width={'25px'} />
                            Sign In With Google
                        </Button>
                    </Form>


                </div>
            </div>
        </div>
    );
};

export default SignIn;