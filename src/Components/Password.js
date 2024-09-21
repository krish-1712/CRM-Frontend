import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { url } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { useFormik } from "formik";
import './Password.css';
import Navabar from './Navabar';


const userSchemaValidation = yup.object({
  password: yup.string().required("Password is required").min(8),
  newpassword: yup.string().required("Password is required").min(8)
})

const Password = () => {
  let navigate = useNavigate();
  const tokenParam = new URLSearchParams(window.location.search);
  const decodedToken = tokenParam.get('token');
  const { handleSubmit, handleChange, errors, touched, values } = useFormik({
    initialValues: {
      password: "",
      newpassword: "",
    },
    validationSchema: userSchemaValidation,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${url}/users/password`, {
          email: values.email,
          password: values.password,
          token: decodedToken
        });
        if (response.status === 200) {
          toast.success(response.data.message)
          navigate('/login')
        } else {
          console.log('Unexpected response:', response);

        }
      } catch (error) {
        toast.error(error.response.data.message)
      }

    }
  })

  useEffect(() => {
    console.log('Password component mounted');
    console.log('Decoded Token:', decodedToken);
  }, [decodedToken]);

  return (
    <Navabar>
      <div className='hero'>
        <div className="home-container">
          <div className='masks'>
            <div className="carousel">

              <div className="carousel-image" style={{ backgroundImage: "url('https://media.licdn.com/dms/image/D4D12AQGuyPByTCa4Rw/article-cover_image-shrink_720_1280/0/1663923402545?e=2147483647&v=beta&t=W0Wqw2QGUfZ9q9N_nKsWgSIlTe6JCYf6Aco2zQBAryM')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://i.ytimg.com/vi/NKUa3wZQSEI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBg5u5GO8jQ7rlRZx2uGlIoT1gpSg')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://www.agilecrm.com/blog/wp-content/uploads/2022/03/CRM-Software-for-Small-Business.png')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://store.outrightcrm.com/wp-content/uploads/2021/08/mayank-bolg-project-header-1.png')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://www.advotics.com/wp-content/uploads/2020/08/CRM-software-advotics-1024x576.png')" }}></div>


            </div>
          </div>

          <div className="contents">

            <div className='Password-wrapper'>
              <div className='clock1'>
                <h1 style={{ "textAlign": "left", color: 'black' }}>Reset Password</h1>
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
                      style={{ width: '300px' }}
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
                      style={{ width: '300px' }}
                    />
                    {touched.newpassword && errors.newpassword ? <p className="error-message">{errors.newpassword}</p> : ""}
                  </Form.Group>
                  <Button variant="primary" type='submit' id='stood'>
                    Reset Password
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

export default Password