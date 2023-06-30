import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { url } from '../App';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import './Contact.css'
import jwt_decode from 'jwt-decode';
import { useState } from 'react';
import Navabar from './Navabar';

const userSchemaValidation = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phonenumber: yup.string().matches(/^[0-9+\-()\s]+$/, 'Invalid phone number').required('Phone number is required'),
});
function Contact() {
  let navigate = useNavigate();
  let token = sessionStorage.getItem('token');
  let userId = sessionStorage.getItem('userId');

  const decodedToken = jwt_decode(token);
  const role = decodedToken.role;

  const [contactCount, setcontactCount] = useState(0);

  const { handleSubmit, handleChange, errors, touched, values } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phonenumber: '',
    },
    validationSchema: userSchemaValidation,
    onSubmit: async (values) => {
      try {
        console.log('Processing...');
        console.log('User ID:', userId);

        if (role !== 'Admin' && role !== 'Manager') {
          return toast.error('Unauthorized access. Only Admin and Managers are allowed to create contacts.');
        }

        let res = await axios.post(`${url}/users/contact/create`, {
          ...values,
          userId,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res);
        toast.success(res.data.message);
        sessionStorage.setItem('user', res.data.userId);

        const updatedCount = contactCount + 1;
        setcontactCount(updatedCount);
        navigate('/dashboard');
      } catch (error) {
        console.log('Error:', error.message);
        if (error.response && error.response.data) {
          toast.error(error.response.data.message);
        } else {
          toast.error('An error occurred');
        }
      }
    },
  });

  return (
    <Navabar>
      <div>
        <img src='https://snov.io/blog/wp-content/uploads/2021/02/2jT2rNPfndRmSJ9SOdn9VFEchk8AEKpSGvPPM1Xu-1-1.png' className='logo' alt=''></img>
      </div>
      <div className='contact-wrapper'>
        <div className='cont1'>
          <h1 style={{ textAlign: 'center', color: 'white' }}>Contact Create Page!</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
              <Form.Label className='rise'>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter the Name'
                className='name'
                name='name'
                value={values.name}
                onChange={handleChange}
                style={{ width: '400px' }}
              />
              {touched.name && errors.name ? <p style={{ color: 'crimson' }}>{errors.name}</p> : ''}
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label className='rise'>Email address</Form.Label>
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
              <Form.Label className='rise'>Phone Number</Form.Label>
              <Form.Control
                type='phone'
                placeholder='Enter the Phone Number'
                className='phonenumber'
                name='phonenumber'
                value={values.phonenumber}
                onChange={handleChange}
                style={{ width: '400px' }}
              />
              {touched.phonenumber && errors.phonenumber ? (
                <p style={{ color: 'crimson' }}>{errors.phonenumber}</p>
              ) : (
                ''
              )}
            </Form.Group>
            <Button variant='primary' type='submit' id='lack'>
              Add
            </Button>
          </Form>
        </div>
        <div className='cont2'>
          <img
            src='https://as1.ftcdn.net/v2/jpg/03/29/64/08/1000_F_329640896_VdAQlqZ7TShpGdsiqYDVvr0h0Y7svhqG.jpg'
            alt=''
          />
        </div>
      </div>
    </Navabar>
  );
}

export default Contact;





