import React, { useState } from "react";
import ReactDOM from "react-dom";

import "F:/projectpoly/polyproject/src/css/front.css";

function App() {

    
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  //const database = [
    //{
      //username: "user1",
      //password: "pass1"
    //},
    //{
      //username: "user2",
      //password: "pass2"
    //}
  //];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  

    // Find user login info
    //const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    //if (userData) {
      //if (userData.password !== pass.value) {
        // Invalid password
        //setErrorMessages({ name: "pass", message: errors.pass });
      //} else {
        //setIsSubmitted(true);
      
    //} else {
      // Username not found
      //setErrorMessages({ name: "uname", message: errors.uname });
    //}
  //};

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  

  return (
    <div className="app">
      
      <div className="login-form">
        <div className="title"><t></t>CARMEL<t></t><br></br>POLYTECHNIC<br></br><br></br>ADMIN LOGIN</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

    
export default App;