import { useNavigate } from "react-router-dom"
import { Heading } from "../Components/Heading";
import { NavLink } from 'react-router-dom';

export  function Login() {
    const history=useNavigate();
    return (
        <Heading>
        <div id="Login">
            <div className="container-2">
                <div className="grid-container-lock">
                 
                    <div className="grid-item-looted">
                        <h3 id="bat">Welcome Back!</h3>
                        <form>
                            <label for="email">
                                <input type="text" id="email" placeholder='Enter Email Address'></input>
                            </label>
                            <br></br>
                            <label for="Password">
                                <input type="text" id="password" placeholder='Password'></input>
                            </label>
                            <br></br>
                            <label for="chechbox" className='check1'>
                                <input type="checkbox" id="choose"></input>
                                Remember Me
                            </label>
                            <br></br>
                            <button  onClick={()=>history("/Admin")}  type="submit" id='role-s'>Login</button>
                            <hr className='roll'></hr>
                            <button type="submit" id='role1' onClick={()=>history("/https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=Af_xneFfj0bU8NnEdlG5A0BIDD9TDUDma15MtHFQIqZOqNVbTAYzrBaX_ngE69Kx6y5c_TikPtMg&flowName=GlifWebSignIn&flowEntry=ServiceLogin")}>
                                G Login with Google
                                
                            </button>
                            <br></br>
                            <button type="submit" id='role2' onClick={()=>history("/https://www.facebook.com/")}>
                                f Login with Facebook
                            </button>
                            <hr className='roll'></hr>
                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                            <br></br>
                            <a className="small" href="register.html"><NavLink to='/Sign' id="log">Create an Account!</NavLink></a>
                        </form>
                        
                    </div>
                </div>
            </div>
          
        </div>
        </Heading>

    )
}




