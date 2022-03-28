import React from 'react';
import Button from 'react-bootstrap/Button';
import './rstyles.css'

function RegistrationForm1() {
    return(
      <div className="form">
          <div className="form-body">
              <h1>STUDENT REGISTRATION FORM</h1>

              
              <div className="Username">
                        <label className="form__label" for="firstName">Student First Name </label>
                         <input className="form__input" type="text" id="firstName" placeholder="Student First Name"/>
                     </div>
                    <div className="Lastname">
                         <label className="form__label" for="lastName">Student Last Name </label>
                         <input  type="text" name="" id="lastName"  className="form__input" placeholder="Student LastName"/>
                     </div>
              <div className="Role" >
                  <label className="form__label" for="role">Student email</label>
                  <input  type="email" name="" id="lastName"  className="form__input"placeholder="email"/>
                </div>
                <div className="username">
                  <label className="form__label" for="firstName">Parent First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Parent Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
                
          </div>
          <div class="footer">
              <Button variant="outline-success" type="submit"> Register</Button>
          </div>
      </div>      )
};
export default RegistrationForm1;