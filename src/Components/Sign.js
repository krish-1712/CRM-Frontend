import { useNavigate } from "react-router-dom";
import { Heading } from "../Components/Heading";


export  function Sign(){
  const history=useNavigate();
    return(
          <Heading>
           <div className="container-1">
        <div className="grid-container-6">
            
            <div className="grid-iteming-2">
                <h3 id="header1">Welcome Back!</h3>
                <form>
                <label for="fname">
                  <input type="text" id="first1" placeholder='First Name'></input>
                  </label>
                  <label for="lname">
                  <input type="text" id="last2" placeholder='Last Name'></input>
                  </label>
                  <br></br>
                  <label for="email">
                  <input type="text" id="email2" placeholder = 'Enter Email Address'></input>
                  </label> 
                  <br></br>
                  <label for="Password">
                  <input type="text" id="password2" placeholder='Password'></input>
                  </label>

                  <label for="RepeatPassword">
                  <input type="text" id="RepeatPassword2" placeholder='Repeat Password'></input>
                  </label>      
                  <br></br>
                  <button type="submit" id='role-90'  onClick={()=>history("/Register")}>Register Account</button>
                  <hr className='roll'></hr>
                  <button type="submit" id='role1'  onClick={()=>history("/https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=Af_xneFfj0bU8NnEdlG5A0BIDD9TDUDma15MtHFQIqZOqNVbTAYzrBaX_ngE69Kx6y5c_TikPtMg&flowName=GlifWebSignIn&flowEntry=ServiceLogin")}>
                  <i class="fab fa-google fa-fw"></i> Register with Google
                  </button>
                  <br></br>
                  <button type="submit" id='role2' onClick={()=>history("/https://www.facebook.com/login/")}>
                    <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                  </button>
                  <hr className='roll'></hr>
                  <a className="small1" href="forgot-password.html">Forgot Password?</a>
                  <br></br>
                 
                </form>
             


            </div>
        </div>
       
    </div> 
    </Heading>


    );
}