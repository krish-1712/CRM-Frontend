import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { url } from '../App';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useFormik } from 'formik';
import './Forgot.css'
import Navabar from './Navabar';

const userSchemaValidation = yup.object({
  email: yup.string().email('Invalid email format').required('Email is required'),
});

const Forgot = () => {
  const { handleSubmit, handleChange, errors, touched, values } = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: userSchemaValidation,
    onSubmit: async (values) => {
      try {
        console.log('inside', values);

        const response = await axios.post(`${url}/users/reset`, { values });

        if (response.status === 200) {
          console.log(response);
          toast.success(response.data.message);
        }
      } catch (error) {
        console.log('Error:', error.message);
        toast.error(error.response.data.message);
      }
    },
  });

  return (
    <Navabar>
      <div className='forgot-wrapper'>
        <div className='for1'>
          <h1 style={{ textAlign: 'center', color: 'black' }}>Forgot Password</h1>
          <h4 className='for' style={{ textAlign: 'center', color: 'black' }}>
            Enter the Email Address Associated with your Account and we will Send you a Link to Reset your Password
          </h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label style={{ marginRight: "250px", color: "black" }}>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email address'
                className='email'
                name='email'
                value={values.email}
                onChange={handleChange}
                style={{ width: '300px' }}
              />
              {touched.email && errors.email ? <p style={{ color: 'crimson' }}>{errors.email}</p> : ''}
            </Form.Group>
            <Button variant='primary' type='submit'>
              Continue
            </Button>
          </Form>
        </div>
      </div>
    </Navabar>
  );
};

export default Forgot;
