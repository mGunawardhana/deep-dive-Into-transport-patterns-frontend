import React, { useEffect, useRef, useState } from 'react';
import '../sign-in-and-up/SignInAndUp.css';
import googleIcon from '../../assets/icons8-google-48.png';
import facebookIcon from '../../assets/icons8-facebook-48.png';
import appleIcon from '../../assets/icons8-apple-30.png';
import { useNavigate } from 'react-router';
import { saveUser } from '../../service/service';
import { toast } from 'react-toastify';
import { Form, Formik } from 'formik';
import * as yup from "yup";
import { Button } from 'reactstrap';
const SignInAndUp = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const [formSubmitData, setFormSubmitData] = useState([]);
  const containerRef = useRef(null);

  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate('/system/dashboard');
  };

  const formSubmitManually = async (value) => {
    const data = { ...formSubmitData, registerUser : value }
    try {
      // const response = await saveUser(data);
      console.log(data);
      toast.success("Successfully Insert");
    } catch (error) {
      toast.error("Error")
    }
  }

  const onSubmit = async (values) => {
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    console.log(data);
    setFormSubmitData(data);
  };



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

  const validationSignInForm = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required")
  })

  return (
    <div className="container" ref={containerRef}>
      <div className="form-container sign-up-container">

        <Formik
          enableReinitialize
          initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSignInForm}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, values, setFieldValue }) =>(
          <Form className="form">
            <h3>Create Account</h3>
            <div className="social-container">
              <img alt="Google Icon" className="social" src={googleIcon} />
              <img alt="Facebook Icon" className="social" src={facebookIcon} />
              <img alt="Apple Icon" className="social" src={appleIcon} />
            </div>
            <span>or use your email for registration</span>
            <input
              className="input"
              placeholder="Name"
              type="text"
              name="name"
              value={signInData.name}
            />
            <input
              className="input"
              placeholder="Email"
              type="email"
              name="email"
              value={signInData.email}
            />
            <input
              className="input"
              placeholder="Password"
              type="password"
              name="password"
              value={signInData.password}
            />
            <Button onClick={()=>formSubmitManually(values)}>Sign Up</Button>
          </Form>
          )}
        </Formik>

      </div>
      <div className="form-container sign-in-container">
        <form className="form" >
          <h3>Sign in</h3>
          <div className="social-container">
            <img alt="Google Icon" className="social" src={googleIcon} />
            <img alt="Facebook Icon" className="social" src={facebookIcon} />
            <img alt="Apple Icon" className="social" src={appleIcon} />
          </div>
          <span>or use your account</span>
          <input
            className="input"
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            value={signInData.email}
          />
          <input
            className="input"
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            value={signInData.password}
          />
          <a href="#">Forgot your password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
      <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h3>Welcome Back!</h3>
            <p style={{ fontSize: '16px', fontWeight: '800' }}>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h3>Hello, aboard!</h3>
            <p style={{ fontSize: '16px', fontWeight: '800' }}>Welcome to the system.</p>
            <button className="ghost" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInAndUp;
