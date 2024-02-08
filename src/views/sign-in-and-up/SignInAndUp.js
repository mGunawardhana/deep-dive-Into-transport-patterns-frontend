import React, { useEffect, useRef } from 'react';
import '../sign-in-and-up/SignInAndUp.css';
import googleIcon from '../../assets/icons8-google-48.png';
import facebookIcon from '../../assets/icons8-facebook-48.png';
import appleIcon from '../../assets/icons8-apple-30.png';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { Button } from 'reactstrap';
import { fetchAllUsers, saveUser } from '../../service/service';

const SignInAndUp = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate('/system/dashboard');
  };

  const getAllUsersFunc = async (values) => {
    try {
      const response = await fetchAllUsers();
      for (let resp of response.data) {
        console.log(resp);
        if (resp.email === values.new_email && resp.password === values.new_password) {
          localStorage.setItem('id', resp.id);
          console.log('Successfully Login');
          navigateToDashboard();
          return;
        }
      }
      toast.error('Invalid email or password');
    } catch (error) {
      toast.error('Error');
    }
  };


  const formSubmitManually = async (values) => {
    try {
      console.log('Form values:', values);
      console.log(values);
      const response = await saveUser(values);
      console.log('Response from saveUser:', response);
      localStorage.setItem('email', values.email);
      localStorage.setItem('username', values.name);
      toast.success('Successfully Insert');
      navigateToDashboard();
    } catch (error) {
      console.error('Error saving user:', error);
      toast.error('Error');
    }
  };

  const validationSignUpForm = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const validationSignInForm = yup.object().shape({
    new_email: yup.string().email('Invalid email').required('Email is required'),
    new_password: yup.string().required('Password is required'),
  });

  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');

    const handleSignUpClick = () => {
      containerRef.current.classList.add('right-panel-active');
    };

    const handleSignInClick = () => {
      containerRef.current.classList.remove('right-panel-active');
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
        <Formik
          enableReinitialize
          initialValues={{
            name: '', email: '', password: '',
          }}
          validationSchema={validationSignUpForm}
          onSubmit={formSubmitManually}
        >
          {({ isSubmitting }) => (<Form className="form">
              <h3>Create Account</h3>
              <div className="social-container">
                <img alt="Google Icon" className="social" src={googleIcon} />
                <img alt="Facebook Icon" className="social" src={facebookIcon} />
                <img alt="Apple Icon" className="social" src={appleIcon} />
              </div>
              <span>or use your email for registration</span>
              <Field className="input" placeholder="Name" type="text" name="name" />
              <Field className="input" placeholder="Email" type="email" name="email" />
              <Field className="input" placeholder="Password" type="password" name="password" />
              <Button className="buttons" type="submit" disabled={isSubmitting}>
                Sign Up
              </Button>
            </Form>)}
        </Formik>
      </div>
      <div className="form-container sign-in-container">
        <Formik
          enableReinitialize
          initialValues={{
            new_email: '', new_password: '',
          }}
          validationSchema={validationSignInForm}
          onSubmit={getAllUsersFunc}
        >
          {({ isSubmitting }) => (<Form className="form">
              <h3>Sign in</h3>
              <div className="social-container">
                <img alt="Google Icon" className="social" src={googleIcon} />
                <img alt="Facebook Icon" className="social" src={facebookIcon} />
                <img alt="Apple Icon" className="social" src={appleIcon} />
              </div>
              <span>or use your account</span>
              <Field
                className="input"
                name="new_email"
                placeholder="Email"
                id="new_email"
                type="email"
              />
              <Field
                className="input"
                placeholder="Password"
                name="new_password"
                id="new_password"
                type="password"
              />
              <a href="/forgot-password">Forgot your password?</a>
              <Button className="buttons" type="submit" disabled={isSubmitting}>
                Sign In
              </Button>
            </Form>)}
        </Formik>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h3>Welcome Back!</h3>
            <p style={{ fontSize: '16px', fontWeight: '800' }}>
              To keep connected with us, please login with your personal info
            </p>
            <button className="buttons ghost" id="signIn">
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h3>Hello, aboard!</h3>
            <p style={{ fontSize: '16px', fontWeight: '800' }}>Welcome to the system.</p>
            <button className="buttons ghost" id="signUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>);
};

export default SignInAndUp;
