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
      <div className="grid-container">
        <div className="contactpage1">
          <h1 style={{ color: 'black' }}>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" style={{ color: 'black', marginRight: "310px" }} >Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name.."
              required
            />

            <label htmlFor="email" style={{ color: 'black', marginRight: "330px" }}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email.."
              required
            />

            <label htmlFor="message" style={{ color: 'black', marginRight: "290px" }}>Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write something.."
              required
            ></textarea><br></br>

            <button type="submit" id='none' >Submit</button>
          </form>
        </div>
      </div>
    </Navabar>
  );
};

export default ContactPage;
