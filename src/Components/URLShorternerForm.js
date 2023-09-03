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
    </Navabar>
  );
}

export default URLShortenerForm;