import React from 'react';
import Navbar from '../components/Navabar';
import './Home.css';

const Home = () => {
  return (
    <Navbar>
      <div className='homes'>

        <div className='background-shade'></div>

        <img
          src='https://img.freepik.com/premium-vector/crm-customer-relationship-management-concept-virtual-screen-customer-service-relationship-robotic-hand-touching-digital-interface_127544-772.jpg'
          className='homepage'
          alt=''
        />
      </div>


    </Navbar>
  );
};

export default Home;
