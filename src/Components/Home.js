
import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Navabar from './Navabar';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/login');
  };
  return (
    <Navabar>
      <div className="hero">
        <div className="home-container">
          <div className='mask'>
            <div className="carousel">

              <div className="carousel-image" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1642381198/photo/customer-relationship-management.jpg?s=612x612&w=0&k=20&c=hewouH78IzuySSSq6QawNCBQCMPfaIfEvTYIdhTZYJs=')" }}></div>               <div className="carousel-image" style={{ backgroundImage: "url('https://www.loginworks.com/wp-content/uploads/2018/01/client-customer-relationship-management-2.jpg')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://media.licdn.com/dms/image/v2/D4D12AQHTX8eGDWjXrg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695716744374?e=2147483647&v=beta&t=bEIJ1LLnNqDv-jUrfZ_hypF3XmOjsCp-Koxk6oio7ZI')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://img.freepik.com/fotos-premium/crm-customer-relationship-management-concepto-sistema-marketing-ventas-comerciales_31965-13455.jpg')" }}></div>
              <div className="carousel-image" style={{ backgroundImage: "url('https://salestack.in/admin/api/uploads/Product/1604564754V4SbBPyg.jpg')" }}></div>


            </div>
          </div>



          <div className="content">

            <h1 >Customer Relationship Management</h1>
            <p >Streamline your customer interactions and improve your business efficiency with our CRM solutions.</p>
            <button className="view-button" onClick={handleNavigate}>

              View More

            </button>
          </div>

        </div>
      </div>
    </Navabar>

  )
}

export default Home