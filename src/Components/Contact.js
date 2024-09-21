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
const Contact = () => {
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
      <div className='hero'>
        <div className="home-container">
          <div className='masks'>
            <div className="carousel">

              <div className="carousel-image" style={{ backgroundImage: "url('https://media.licdn.com/dms/image/D4D12AQF66NJcoJITMQ/article-cover_image-shrink_720_1280/0/1686141376542?e=2147483647&v=beta&t=kI4aUSU2BeZh-im3dKw9fo0qzzjD5FLqTen59GbMXtc')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://cdn.prod.website-files.com/64d5c8b8417c07810e9de9a7/65115bec8a8e1ab8aee427bf_Importance-of-Customer-Relationship-Management-1.webp')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://media.licdn.com/dms/image/v2/D4D12AQGbEOPmdDt2Tg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1669384647571?e=2147483647&v=beta&t=vNZXrVCR7WBzWuaxD-zRthnf4spV9t6jcf2kLcgKutQ')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://i0.wp.com/www.sutisoft.com/blog/wp-content/uploads/2023/01/CRM.jpg?fit=1200%2C675&ssl=1')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://www.mygreatlearning.com/blog/wp-content/uploads/2022/02/crm-benefits-1024x576.jpg')" }}></div>


            </div>
          </div>

          <div className="contents">

            <div className='contact-wrapper'>
              <div className='cont1'>
                <h1 style={{ textAlign: 'center', color: 'black' }}> Create Contact Page!</h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className='mb-3'>
                    <Form.Label style={{ marginRight: "350px" }}>Name</Form.Label>
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
                    <Form.Label style={{ marginRight: "290px" }}>Email address</Form.Label>
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
                    <Form.Label style={{ marginRight: "290px" }}>Phone Number</Form.Label>
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
            </div>
          </div>
        </div>
      </div>
    </Navabar>
  )
}

export default Contact