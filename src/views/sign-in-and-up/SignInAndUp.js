import React, { useEffect, useRef, useState } from 'react';
import '../sign-in-and-up/SignInAndUp.css';
import googleIcon from '../../assets/icons8-google-48.png';
import facebookIcon from '../../assets/icons8-facebook-48.png';
import appleIcon from '../../assets/icons8-apple-30.png';
import { useNavigate } from 'react-router';

const SignInAndUp = () => {

  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate('/system/dashboard');
  };

  // eslint-disable-next-line
  const [activePanel, setActivePanel] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');

    const handleSignUpClick = () => {
      containerRef.current.classList.add('right-panel-active');
      setActivePanel('signUp');
    };

    const handleSignInClick = () => {
      containerRef.current.classList.remove('right-panel-active');
      setActivePanel('signIn');
    };

    if (signUpButton && signInButton && containerRef.current) {
      signUpButton.addEventListener('click', handleSignUpClick);
      signInButton.addEventListener('click', handleSignInClick);

      return () => {
        signUpButton.removeEventListener('click', handleSignUpClick);
        signInButton.removeEventListener('click', handleSignInClick);
      };
    }
  }, []);

  return (<div className="container" ref={containerRef}>
      <div className="form-container sign-up-container">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <form className="form" action="#">
          <h3>Create Account</h3>
          <div className="social-container">
            <img alt="Google Icon" className="social" src={googleIcon} />
            <img alt="Facebook Icon" className="social" src={facebookIcon} />
            <img alt="Apple Icon" className="social" src={appleIcon} />
          </div>

          <span>or use your email for registration</span>
          <input className="input" placeholder="Name" type="text" />
          <input className="input" placeholder="Email" type="email" />
          <input className="input" placeholder="Password" type="password" />
          <button onClick={navigateToDashboard}>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form className="form" action="#">
          <h3 >Sign in</h3>
          <div className="social-container">
            <img alt="Google Icon" className="social" src={googleIcon} />
            <img alt="Facebook Icon" className="social" src={facebookIcon} />
            <img alt="Apple Icon" className="social" src={appleIcon} />
          </div>
          <span>or use your account</span>
          <input className="input" placeholder="Email" type="email" />
          <input className="input" placeholder="Password" type="password" />
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Forgot your password?</a>
          <button onClick={navigateToDashboard}>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h3>Welcome Back!</h3>
            <p style={{ fontSize: '16px', fontWeight: '800' }}>To keep connected with us please login with
              your personal info</p>
            <button  className="ghost" id="signIn">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h3>Hello, aboard!</h3>
            <p style={{ fontSize: '16px', fontWeight: '800' }}>
              Welcome to the system.
            </p>
            <button className="ghost" id="signUp" >Sign Up</button>
          </div>
        </div>
      </div>
    </div>);
};

export default SignInAndUp;
