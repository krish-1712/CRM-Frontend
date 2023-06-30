import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './ContactPage.css';
import { url } from '../App';
import Navabar from './Navabar';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}/users/contactpage`, {
        values: {
          name,
          email,
          message,
        },
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Navabar>

      <div>
        <img src='https://as2.ftcdn.net/v2/jpg/02/49/19/53/1000_F_249195319_WQ6wDNDO3gaJBpPNNA1eFPxHc2ZqNiIj.jpg' className='lucky' alt=''></img>
      </div>
      <div className="container">
        <div className="grid-container">
          <div className="contactpage1">
            <h1 style={{ color: 'white' }}>Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" style={{ color: 'white' }} >Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name.."
                required
              />

              <label htmlFor="email" style={{ color: 'white' }}>Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email.."
                required
              />

              <label htmlFor="message" style={{ color: 'white' }}>Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write something.."
                required
              ></textarea>

              <button type="submit" id='none' >Submit</button>
            </form>
          </div>
          <div className="contactpage2">
            <img
              src="https://cdn.pixabay.com/photo/2022/04/19/11/26/crm-7142692_640.jpg"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </Navabar>
  );
};

export default ContactPage;
