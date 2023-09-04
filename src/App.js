
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// import Forgot from "components/Forgot";
// import Password from "components/Password";
// import Register from "components/Register";
// import Dashboard from "components/Dasboard";
// import Redirect from "components/Redirect";
// import Contact from "components/Contact";
// import Service from "components/Service";
// import Navbar from "components/Navabar";
// import Home from "components/Home";
// import ContactPage from "components/ContactPage";
// import URLShortenerForm from "components/URLShorternerForm";
// import Login from "components/Login";
// export const url = "http://localhost:3000"


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route>
//           <Route path="/login" element={   <Login/>} />
//           <Route path="/forgot" element={<Forgot />} />
//           <Route path="/password" element={<Password />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/url" element={<Redirect />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/service" element={<Service />} />
//           <Route path="/navbar" element={<Navbar />} />
//           <Route path="/contactpage" element={<ContactPage />} />
//           <Route path="/shorten" element={<URLShortenerForm />} />
//           <Route path="/" element={<Home />} />
//           <Route path="*" element={<Navigate to='/' />} />

       
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// import Forgot from "components/Forgot";
// import Password from "components/Password";
// import Register from "components/Register";
// import Dashboard from "components/Dasboard";
// import Redirect from "components/Redirect";
// import Contact from "components/Contact";
// import Service from "components/Service";
// import Navbar from "components/Navabar";
// import Home from "components/Home";
// import ContactPage from "components/ContactPage";
// import URLShortenerForm from "components/URLShorternerForm";
// import Login from "components/Login";

// export const url = "http://localhost:3000";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot" element={<Forgot />} />
//         <Route path="/password" element={<Password />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/url" element={<Redirect />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/navbar" element={<Navbar />} />
//         <Route path="/contactpage" element={<ContactPage />} />
//         <Route path="/shorten" element={<URLShortenerForm />} />
//         <Route path="/" element={<Home />} />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Contact from "Components/Contact";
// import Contact from "components/Contact";
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
