import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { url } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from "formik";

import './Password.css';
import Navabar from './Navabar';

const userSchemaValidation = yup.object({
  password: yup.string().required("Password is required").min(8),
  newpassword: yup.string().required("New Password is required").min(8)
});

const Password = () => {
  let navigate = useNavigate();
  const tokenParam = new URLSearchParams(window.location.search);
  const decodedToken = tokenParam.get('token');
  console.log("Testing: " + decodedToken);

  const { handleSubmit, handleChange, errors, touched, values } = useFormik({
    initialValues: {
      password: "",
      newpassword: "",
    },
    validationSchema: userSchemaValidation,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${url}/users/password`, {
          values,
          token: decodedToken
        });

        if (response.status === 200) {
          console.log(response);
          toast.success(response.data.message);
          navigate('/login');
        } else {
          console.log('Unexpected response:', response);
        }
      } catch (error) {
        console.log('Error:', error.message);
        toast.error(error.response.data.message);
      }
    }
  });

  useEffect(() => {
    console.log('Password component mounted');
    console.log('Decoded Token:', decodedToken);
  }, [decodedToken]);

  return (
    <Navabar>
      <div>
        <img src='https://saaslist.com/uploads/What-is-CRM.jpg' className='dot' alt=''></img>
      </div>

      <div className='Password-wrapper'>
        <div className='clock1'>
          <h1 style={{ "textAlign": "left", color: 'white' }}>Reset Password</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className='ride'>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter the Password"
                className="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                style={{ width: '400px' }}
              />
              {touched.password && errors.password ? <p className="error-message">{errors.password}</p> : ""}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className='ride'>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter the New Password"
                className="newpassword"
                name="newpassword"
                value={values.newpassword}
                onChange={handleChange}
                style={{ width: '400px' }}
              />
              {touched.newpassword && errors.newpassword ? <p className="error-message">{errors.newpassword}</p> : ""}
            </Form.Group>
            <Button variant="primary" type='submit' id='stood'>
              Reset Password
            </Button>
          </Form>
        </div>
        <div className='clock2'>
          <img
            src="https://s3-us-west-2.amazonaws.com/aa.techdemand.io/wp-content/uploads/2020/09/24133555/CRM-2-1024x631.jpg"
            alt=""
            id="look7"
          />
        </div>
      </div>
    </Navabar>
  );
}

export default Password;
