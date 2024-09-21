import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { url } from '../App';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import jwt_decode from 'jwt-decode';
import './Service.css';
import { useState } from 'react';
import Navabar from './Navabar';

const userSchemaValidation = yup.object({
  name: yup.string().required('Name is required'),
  description: yup.string().required('Description is required'),
  status: yup.string().required('Status is required').oneOf(['Open', 'Closed'])
});
const Service = () => {
  let navigate = useNavigate();
  let token = sessionStorage.getItem('token');


  const [serviceRequestCount, setServiceRequestCount] = useState(0);

  const { handleSubmit, handleChange, errors, touched, values } = useFormik({
    initialValues: {
      name: '',
      description: '',
      status: ''
    },
    validationSchema: userSchemaValidation,
    onSubmit: async (values) => {
      try {
        console.log('Processing...');
        let userId = sessionStorage.getItem('userId');
        console.log('User ID:', userId);

        const decodedToken = jwt_decode(token);
        const role = decodedToken.role;
        console.log('Role:', role);

        if (role !== 'Admin' && role !== 'Manager') {
          toast.error('Unauthorized Access');
          return;
        }

        let res = await axios.post(
          `${url}/users/service/create`,
          {
            ...values,
            userId: userId
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        console.log(res);
        toast.success(res.data.message);
        sessionStorage.setItem('userId', res.data.userId);
        console.log('Response Data:', res.data);
        console.log('User ID:', res.data.userId);

        const updatedCount = serviceRequestCount + 1;
        setServiceRequestCount(updatedCount);
        navigate('/dashboard');
      } catch (error) {
        console.log('Error:', error.message);
        if (error.response && error.response.data) {
          toast.error(error.response.data.message);
        } else {
          toast.error('An error occurred');
        }
      }
    }
  });
  return (
    <Navabar>
      <div className='hero'>
        <div className="home-container">
          <div className='masks'>
            <div className="carousel">

              <div className="carousel-image" style={{ backgroundImage: "url('https://quasa.io/storage/images/news/cImV8ugwWdC58TF1rgyNTgWh3xY0UxM8hzih6tlv.png')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://cdn.infodiagram.com/c/c623fc/customer-relationship-management.png')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://www.elviserp.com/en-my/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-02-at-4.15.57-PM.webp')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://blogs.apptivo.com/wp-content/uploads/2022/07/Frame-4-1.png')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://www.corefactors.in/blog/content/images/2023/11/Blog-Banner_Cultivating-Success-CRM-min.png')" }}></div>


            </div>
          </div>

          <div className="contents">

            <div className='service-wrapper'>
              <div className='high1'>
                <h1 className='paper'>Service Create Page!</h1>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className='mb-3'>
                    <Form.Label style={{ marginRight: "350px" }}>Name</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter your Name'
                      className='name'
                      name='name'
                      value={values.name}
                      onChange={handleChange}
                      style={{ width: '400px' }}
                    />
                    {touched.name && errors.name ? <p className='error-message'>{errors.name}</p> : ''}
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Label style={{ marginRight: "350px" }}>Status</Form.Label>
                    <Form.Control
                      as='select'
                      className='status'
                      name='status'
                      value={values.status}
                      onChange={handleChange}
                      style={{ width: '400px' }}
                    >
                      <option value=''>Select</option>
                      <option value='Open'>Open</option>
                      <option value='Closed'>Closed</option>
                    </Form.Control>
                    {touched.status && errors.status ? <p className='error-message'>{errors.status}</p> : ''}
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Label style={{ marginRight: "310px" }}>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Enter your Description"
                      className="description"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      style={{ width: '400px' }}
                    />

                    {touched.description && errors.description ? <p className='error-message'>{errors.description}</p> : ''}
                  </Form.Group>
                  <Button variant='primary' type='submit' id='pop'>
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

export default Service