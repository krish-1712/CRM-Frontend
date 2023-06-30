import React, { useState } from 'react';
import axios from 'axios';
import { url } from '../App';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navabar from './Navabar';
import './URLShorternerForm.css'

function URLShortenerForm() {
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

      <div>
        <img src='https://thumbs.dreamstime.com/b/crm-isometric-banner-internet-business-strategy-customer-relationship-management-concepts-technologies-set-icons-vector-172930200.jpg' className='try' alt=''></img>
      </div>
      <div className='short-wrapper'>
        <div className='form1'>
          <h1 style={{ textAlign: 'center', color: 'white', marginTop: "60px" }}>URL Shorterner</h1>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label style={{ "fontSize": "15px", "color": "white", marginTop: "10px", marginLeft: "20px" }}>Enter Your URL</Form.Label>
              <Form.Control type="text" placeholder="eg:https://www.example.com" value={originalURL} onChange={handleInputChange}
                style={{ "width": "70%", marginLeft: "20px" }} />
            </Form.Group>

            <Button variant="primary" id='clicks' onClick={handleShortenURL}>
              Shorten
              {shortenedURL && <p>Shortened URL: {shortenedURL}</p>}
            </Button>
          </Form>
        </div>
        <div className='form2'>
          <img src='https://www.apptivo.com/wp-content/uploads/2021/06/CRM-Importance-In-Business-A-Comprehensive-Overview-.png' alt='' id='' />
        </div>
      </div>
    </Navabar>
  );
}

export default URLShortenerForm;