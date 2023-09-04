
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// import Forgot from "./components/Forgot";
// import Password from "./components/Password";
// import Register from "./components/Register";
// import Dashboard from "./components/Dasboard";
// import Redirect from "./components/Redirect";
// import Contact from "./components/Contact";
// import Service from "./components/Service";
// import Navbar from "./components/Navabar";
// import Home from "./components/Home";
// import ContactPage from "./components/ContactPage";
// import URLShortenerForm from "./components/URLShorternerForm";
// import Login from "./components/Login";
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

// import Forgot from "./components/Forgot";
// import Password from "./components/Password";
// import Register from "./components/Register";
// import Dashboard from "./components/Dasboard";
// import Redirect from "./components/Redirect";
// import Contact from "./components/Contact";
// import Service from "./components/Service";
// import Navbar from "./components/Navabar";
// import Home from "./components/Home";
// import ContactPage from "./components/ContactPage";
// import URLShortenerForm from "./components/URLShorternerForm";
// import Login from "./components/Login";

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
import Contact from "./components/Contact";
// import Contact from "./components/Contact";
import ContactPage from "./components/ContactPage";
import Dashboard from "./components/Dasboard"; // Corrected typo in component name
import Forgot from "./components/Forgot";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navabar"; // Corrected typo in component name

import Password from "./components/Password";
import Redirect from "./components/Redirect";
import Register from "./components/Register";

import Service from "./components/Service";

import URLShortenerForm from "./components/URLShorternerForm"; // Updated import path

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
        <Route path="/navbar" element={<Navbar />} />
    
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
