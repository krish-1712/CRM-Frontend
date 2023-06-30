import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import jwt_decode from 'jwt-decode';
import './Dasboard.css';



const StyledTable = styled(Table)({
  minWidth: 400,
  margin: 'auto',
  border: '1px solid #ccc',
  width: '600px',
  height: '100px',
  overflow: 'auto',
});
const StyledHeaderCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: '10px',
}));

const StyledBodyCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  padding: '10px',
}));
const Dashboard = () => {
  const [counts, setCounts] = useState({ serviceRequestCount: 0, contactCount: 0 });
  const [serviceDetails, setServiceDetails] = useState([]);
  const [contactDetails, setContactDetails] = useState([]);
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');
  const userId = sessionStorage.getItem('userId');
  const decodedToken = jwt_decode(token);
  console.log("test:", decodedToken);

  useEffect(() => {
    const fetchURLCounts = async () => {
      try {
        if (!token) {
          toast.error('Session expired. Please login again.');
          sessionStorage.clear();
          navigate('/login');
        } else {
          const response = await axios.get(`${url}/users/${userId}/count`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const { serviceRequestCount, contactCount } = response.data ? response.data : {};
          setCounts({ serviceRequestCount, contactCount });
          toast.success(response.data.message);

          try {
            const serviceResponse = await axios.get(`${url}/users/${userId}/service`, {
              headers: { Authorization: `Bearer ${token}` },
            });

            console.log('Service Response:', serviceResponse.data);

            if (serviceResponse.data && serviceResponse.data.users) {
              setServiceDetails(serviceResponse.data.users);
            } else {
              console.error('Invalid service response:', serviceResponse.data);

            }

            const contactResponse = await axios.get(`${url}/users/${userId}/contact`, {
              headers: { Authorization: `Bearer ${token}` },
            });

            console.log('Contact Response:', contactResponse.data);

            if (contactResponse.data && contactResponse.data.users) {
              setContactDetails(contactResponse.data.users);
            } else {
              console.error('Invalid contact response:', contactResponse.data);

            }

          } catch (error) {
            console.error('Error fetching service details:', error);

          }
        }
      } catch (error) {
        console.error('Error fetching counts:', error);
        toast.error(error.response?.data?.message || 'Error fetching counts');
        navigate('/login');
      }
    };

    fetchURLCounts();
  }, [navigate, token, userId]);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  return (

    <div className='do'>

      <Button variant="contained" color="success" id='service' onClick={() => navigate('/service')}>
        Service
      </Button>
      <Button variant="contained" id='contact' color="success" onClick={() => navigate('/contact')} style={{ "marginLeft": "10px" }}>
        Contact
      </Button>
      <Button variant="contained" color="success" id='short' onClick={() => navigate('/shorten')}>
        Shortern
      </Button>
      <Button variant="contained" color="error" id='lime' onClick={handleLogout}>
        Logout
      </Button>

      <div className='dashed'>
        <h2 className='lock'>Dashboard</h2>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledHeaderCell>Service Request Count</StyledHeaderCell>
              <StyledHeaderCell>Contact Count</StyledHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledBodyCell>{counts.serviceRequestCount}</StyledBodyCell>
              <StyledBodyCell>{counts.contactCount}</StyledBodyCell>
            </TableRow>
          </TableBody>
        </StyledTable>
      </div>


      <div className="details-container">
        <div className="service-details">
          <h3 className='serve'>Service Details</h3>
          <StyledTable>
            <TableHead>
              <TableRow>
                <StyledHeaderCell>Name</StyledHeaderCell>
                <StyledHeaderCell>Description</StyledHeaderCell>
                <StyledHeaderCell>Status</StyledHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {serviceDetails.map((service) => (
                <TableRow key={service._id}>
                  <StyledBodyCell>{service.name}</StyledBodyCell>
                  <StyledBodyCell>{service.description}</StyledBodyCell>
                  <StyledBodyCell>{service.status}</StyledBodyCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </div>
        <div className="contact-details">
          <h3 className='cont'>Contact Details</h3>
          <StyledTable>
            <TableHead>
              <TableRow>
                <StyledHeaderCell>Name</StyledHeaderCell>
                <StyledHeaderCell>Email</StyledHeaderCell>
                <StyledHeaderCell>PhoneNumber</StyledHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contactDetails.map((contact) => (
                <TableRow key={contact._id}>
                  <StyledBodyCell>{contact.name}</StyledBodyCell>
                  <StyledBodyCell>{contact.email}</StyledBodyCell>
                  <StyledBodyCell>{contact.phonenumber}</StyledBodyCell>
                </TableRow>
              ))}
            </TableBody>
          </StyledTable>
        </div>
      </div>
    </div>


  );
};

export default Dashboard;





