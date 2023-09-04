import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Contact from "Components/Contact";
import ContactPage from "Components/ContactPage" ;
import Dashboard from "Components/Dasboard"; 
import Forgot from "Components/Forgot";
import Home from "Components/Home";
import Login from "Components/Login";
import Navabar from "Components/Navabar";

import Password from "Components/Password";
import Redirect from "Components/Redirect";
import Register from "Components/Register";

import Service from "Components/Service";

import URLShortenerForm from "Components/URLShorternerForm"; 

export const url = "http://localhost:3000";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/contactpage" element={<ContactPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/forgot" element={<Forgot />} />
  
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={   <Navabar/>} />
 
        <Route path="/password" element={<Password />} />
        <Route path="/url" element={<Redirect />} />
        <Route path="/register" element={<Register />} />
   
  
        <Route path="/service" element={<Service />} />
     
       
        <Route path="/shorten" element={<URLShortenerForm />} />
  
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
