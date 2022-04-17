import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.inti';
import './SignIn.css'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    }

    if (user) {
        navigate('/')
    }

    const handleUserSignin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div>
            <h1>Sign In</h1>
            <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6 form p-5">
                    <Form onSubmit={handleUserSignin} className='w-50 m-auto'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
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