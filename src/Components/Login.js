import axios from 'axios';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { url } from '../App';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';

import './Login.css';
import Navabar from './Navabar';

const userSchemaValidation = yup.object({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required'),
});

function Login() {
  const navigate = useNavigate();

  const { handleSubmit, handleChange, errors, touched, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: userSchemaValidation,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(`${url}/users/login`, values);
        console.log(res);
        toast.success(res.data.message);
        sessionStorage.setItem('token', res.data.token);
        console.log(res.data.userId);
        sessionStorage.setItem('userId', res.data.userId);
        console.log("role:", res.data.role)
        sessionStorage.setItem('role', res.data.role);

        if (res.data.role === 'Employee' || res.data.role === 'Admin' || res.data.role === 'Manager') {
          navigate('/dashboard');
        } else {
          toast.error('Access Denied! Only employees, admins, and managers are allowed to login.');
        }
      } catch (error) {
        console.log('Error:', error.message);
        toast.error(error.response.data.message);
      }
    },


  });

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const userId = sessionStorage.getItem('userId');

    if (token && userId) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <Navabar>

      <div>
        <img src='https://www.cxtoday.com/wp-content/uploads/2022/01/CRM-101-Customer-Relationship-Management.jpeg' className='lane' alt=''></img>
      </div>
      <div className='login-wrapper'>
        <div className='log1'>
          <h1 style={{ textAlign: 'center', color: 'white' }}>Login Here</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label className='ads'>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email address'
                className='email'
                name='email'
                value={values.email}
                onChange={handleChange}
                style={{ width: '400px' }}
              />
              {touched.email && errors.email ? <p style={{ color: 'crimson' }}>{errors.email}</p> : ''}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className='ads'>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter the Password'
                className='password'
                name='password'
                value={values.password}
                onChange={handleChange}
                style={{ width: '400px' }}
              />
              {touched.password && errors.password ? (
                <p style={{ color: 'crimson' }}>{errors.password}</p>
              ) : (
                ''
              )}
            </Form.Group>
            <Button variant='primary' id='suit' type='submit'>
              Submit
            </Button>
            <Button variant='primary' id='suit1' onClick={() => navigate('/forgot')}>
              Forgot Password
            </Button>
            <Button variant='primary' id='suit2' onClick={() => navigate('/register')}>
              Create Account
            </Button>
          </Form>
        </div>
        <div className='log2'>
          <img
            src='https://img.freepik.com/premium-vector/crm-customer-relationship-management-concept-virtual-screen-customer-service-relationship-robotic-hand-touching-digital-interface_127544-772.jpg'
            alt=''
            id='late'
          ></img>
        </div>
      </div>
    </Navabar>
  );
}

export default Login;
