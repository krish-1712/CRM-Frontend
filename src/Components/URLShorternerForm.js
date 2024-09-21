import React, { useState } from 'react';
import axios from 'axios';
import { url } from '../App';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navabar from './Navabar';
import './URLShorternerForm.css'

const URLShortenerForm = () => {
  const [originalURL, setOriginalURL] = useState('');
  const [shortenedURL, setShortenedURL] = useState('');
  let navigate = useNavigate()

  const handleInputChange = (e) => {
    setOriginalURL(e.target.value);
  };

  const handleShortenURL = async () => {
    try {
      const response = await axios.post(`${url}/users/shorten`, { originalURL });
      const { shortenedURL } = response.data;
      setShortenedURL(shortenedURL);
      toast.success('URL shortened successfully');
      navigate('/dashboard')
    } catch (error) {
      console.error(error);
      toast.error('Error shortening URL');
    }
  };

  return (
    <Navabar>
      <div className='hero'>
        <div className="home-container">
          <div className='masks'>
            <div className="carousel">

              <div className="carousel-image" style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/customer-relationship-management-crm-concept_6280-626.jpg')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://syndelltech.com/wp-content/uploads/2023/08/How-to-Develop-CRM-Software_-A-Complete-Guide.jpg')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://thaiconfig.com/wp-content/uploads/2023/03/CRM-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3.jpeg')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://media.licdn.com/dms/image/D4D12AQHTLhUJ0y9AmA/article-cover_image-shrink_720_1280/0/1693393197188?e=2147483647&v=beta&t=Pk3rwE9PWqccObdCgF96rWJ2_isT21mTf0ftX0za0iQ')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://media.licdn.com/dms/image/D4E12AQHwNnVQrqkiXw/article-cover_image-shrink_720_1280/0/1678724055293?e=2147483647&v=beta&t=TLSkqyxT82TBzOyzjdjTh0NQbrZaP4FOU79p3VYNxcs')" }}></div>


            </div>
          </div>

          <div className="content-1">

            <div className='short-wrapper'>
              <div className='form1'>
                <h1 style={{ textAlign: 'center', color: 'black', }}>URL Shorterner</h1>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ "fontSize": "15px", "color": "white", }}>Enter Your URL</Form.Label>
                    <Form.Control type="text" placeholder="eg:https://www.example.com" value={originalURL} onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Button variant="primary" id='clicks' onClick={handleShortenURL}>
                    Shorten
                    {shortenedURL && <p>Shortened URL: {shortenedURL}</p>}
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

export default URLShortenerForm