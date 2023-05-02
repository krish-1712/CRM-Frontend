
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Components/App1.css';
import './Components/Open.css'
import './Components/About.css'
import './Components/Login.css'
import './Components/Sign.css'
import './Components/ForgetPassword.css'
import { Login } from './Components/Login';
import { Heading } from './Components/Heading';
import Open from './Components/Open';
import { Sign } from './Components/Sign';
import { About } from './Components/About';
import Admin from './Admin';
import Register from './Components/Register';
import Forgot from './Components/ForgetPassword';


function App() {
  return (
    <div className="App">

      <Routes>

        <Route exact path='/Heading' element={<Heading />}>

        </Route>
  
        <Route exact path='/Register' element={<Register />}>

        </Route>
        <Route exact path='/ForgetPassword' element={ <Forgot/>}>

        </Route>


        <Route exact path='/Open' element={<Open />}>

        </Route>

        <Route exact path='/About' element={<About />}>

        </Route>
        <Route exact path='/Admin' element={<Admin />}>

        </Route>
 


        <Route exact path="/Login" element={<Login />} >
        </Route>


        <Route path="/Sign" element={<Sign />} >
        </Route>
      </Routes>


    </div>
  );
}

export default App;
