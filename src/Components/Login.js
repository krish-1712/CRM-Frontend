import axios from 'axios';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { url } from '../App';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
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
      <div className='login-wrapper'>
        <div className='log1'>
          <h1 style={{ textAlign: 'center', color: 'black' }}>Login Here</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label style={{ marginRight: "290px" , color:"black" }} >Email address</Form.Label>
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
              <Form.Label style={{ marginRight: "330px",color:"black" }}>Password</Form.Label>
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
            <Button variant='primary' id='suit' type='submit' style={{ width: "100px" }}>
              Submit
            </Button><br></br>


            <NavLink to="/forgot" >Forgot Password</NavLink>

            <NavLink to="/register">Create Account</NavLink>
          </Form>
        </div>
      </div>
    </Navabar>
  );
}

export default Login;
