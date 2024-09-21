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
      <div className='hero'>
        <div className="home-container">
          <div className='masks'>
            <div className="carousel">

              <div className="carousel-image" style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/crm-customer-relationship-management-automation-system-software-business-technology-concept-328539300.jpg')" }}></div>               
              <div className="carousel-image" style={{ backgroundImage: "url('https://miro.medium.com/v2/resize:fit:1400/1*8NQEU7h8i8LufyISpwu2XQ.png')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://www.cloudifyapps.com/content/images/2022/05/CRM-software-banner--1-.jpg')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://c8.alamy.com/comp/KDR54Y/illustrative-diagram-of-customer-relationship-management-for-managing-KDR54Y.jpg')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://media.licdn.com/dms/image/D5612AQGzBAbMWWpxaA/article-cover_image-shrink_720_1280/0/1662973847695?e=2147483647&v=beta&t=hTNEgpSZRRwnxI0K2wv1qJBIIBnccNrd_DxVY1ouOJA')" }}></div>


            </div>
          </div>

          <div className="contents">

            <div className='forgot-wrapper'>
              <div className='for1'>
                <h1 style={{ textAlign: 'center', color: 'black' }}>Forgot Password</h1>
                <h4 className='for' style={{ textAlign: 'center', color: 'black' }}>
                  Enter the Email Address Associated with your Account and we will Send you a Link to Reset your Password
                </h4>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className='mb-3'>
                    <Form.Label style={{ color: "black" }}>Email address</Form.Label>
                    <Form.Control
                      type='email'
                      placeholder='Enter email address'
                      className='email'
                      name='email'
                      value={values.email}
                      onChange={handleChange}
                    />
                    {touched.email && errors.email ? <p style={{ color: 'crimson' }}>{errors.email}</p> : ''}
                  </Form.Group>
                  <Button variant='primary' type='submit'>
                    Continue
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Navabar>
  )
}

export default Forgot