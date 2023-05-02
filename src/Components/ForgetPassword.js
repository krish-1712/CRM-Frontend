


export default function Forgot(){

    return(
        <div>
         <div className="container-50">
        <div className="grid-container-60">
         
            <div className="grid-item-80">
                <h2 >Forgot Your Password?</h2>
                <p className="we">We get it, stuff happens. Just enter your email<br></br>no
                  address below and we'll send you a link to<br></br>
                  reset your password!</p>
                <form>
                  <label for="email">
                  <input type="text" id="email-id" placeholder='Enter Email Address'></input>
                  </label>
                    <br></br>
                 <button type="submit" id='role-id'>Reset Password</button>
                  <hr className='rolcy'></hr>
                  <a className="small-id" href="forgot-password.html"> Create an Account!</a>
                  <br></br>
                  <a className="small-id-1" href="register.html">Already have an account? Login!</a>
                </form>
             

               
            </div>
        </div>
        
    </div> 
    
    </div>

    

          

    );
}