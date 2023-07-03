
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Forgot from "./components/Forgot";
import Password from "./components/Password";
import Register from "./components/Register";
import Dashboard from "./components/Dasboard";
import Redirect from "./components/Redirect";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Navbar from "./components/Navabar";
import Home from "./components/Home";
import ContactPage from "./components/ContactPage";
import URLShortenerForm from "./components/URLShorternerForm";
export const url = "http://localhost:3000"
// export const url="https://crm-backend-oofi.onrender.com/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/password" element={<Password />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/url" element={<Redirect />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/shorten" element={<URLShortenerForm />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;