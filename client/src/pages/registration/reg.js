import React from 'react';
import Button from 'react-bootstrap/Button';
import './rstyles.css'

function RegistrationForm() {
   
    return(
      <div className="form">
          <div className="form-body">
              <h1>TUTOR REGISTRATION FORM</h1>
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="Role" >
                  <label className="form__label" for="role">email</label>
                  <input  type="email" name="" id="lastName"  className="form__input"placeholder="email"/>
                </div>
              {/* <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div> */}
          </div>
          <div class="footer">
              <Button variant="outline-success" type="submit"> Register</Button>
          </div>
      </div>      )
};
export default RegistrationForm;