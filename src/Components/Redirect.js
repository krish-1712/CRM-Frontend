import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { url } from '../App';

function Redirect() {
  let navigate = useNavigate();
  const tokenParam = new URLSearchParams(window.location.search);
  const decodedToken = tokenParam.get('id');
  console.log("Testing :" + decodedToken);
  useEffect(() => {
    const activateAccount = async () => {
      try {
        const response = await axios.post(`${url}/users/url`, {
          id: decodedToken
        });
        console.log("response : " + response)
        if (response.status === 200) {
          console.log("response : " + response.data.originalURL)
          navigate(response.data.originalURL);
        } else {
          console.log('Unexpected response:', response);
          navigate('/login');
        }
      } catch (error) {
        toast.error(error.response.data.message)
        navigate('/login');
      }
    }
    console.log("testing");
    activateAccount();
  }, [decodedToken, navigate])

  return (
    <div></div>
  )
}

export default Redirect