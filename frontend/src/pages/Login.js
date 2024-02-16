

function Login() {
  return (
    <div className="login-section">
        <div className="login-container">
            <img src="https://freepngimg.com/save/17091-running-shoes-png-clipart/670x363" alt="black and pink shoe" />
            <div className="sign-up-container">
                <span>Sign up an account</span>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="email" placeholder="Email" />
                <input type="number" placeholder="Contact Number" />
                <input type="password" placeholder="Password"/>
                <button className="signup-btn secondary-btn">Complete Sign-up</button>
            </div> 
        </div>
    </div>
  );
}

export default Login;
