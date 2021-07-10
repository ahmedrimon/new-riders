import React, { useContext } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";

import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";



const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }
  const handleSignInGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    
    const {displayName, email} = result.user;
    const signedInUser = {name: displayName, email}
    setLoggedInUser(signedInUser);
    
  }).catch((error) => {
    
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode, errorMessage, email, credential);
    
  });

  }


  const handleSignInFacebook = () => {

  }

  return (
    <div>
      
      
      <p>Name: {loggedInUser.name}</p>
      <Form className="form">
        <h2>Create an account</h2>
        <br />
        <Form.Group className="form-group" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Your Name" />
        </Form.Group>

        <Form.Group className="form-group" controlId="formBasicEmail">
          <Form.Label>Username and Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="form-group" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="form-group" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create an account
        </Button>
        <br />
        <br />
        <h6>
          Already have an account? <a href="/login">Login</a>
        </h6>
      </Form>

      <h6 className="text">or</h6>
      <Button className="facebook-button" onClick={() => handleSignInFacebook()} variant="primary" type="submit">
        Continue with facebook
      </Button>
      <br />
      <br />
      <Button className="google-button" onClick={() => handleSignInGoogle()} variant="warning" type="submit">
        Continue with google
      </Button>
    </div>
  );
};

export default Login;
