import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ProfileLogo } from './ProfileLogo';
import '../styles/navigators.css';
import * as auth from '../services/authService';
import { useSnackbar } from 'react-simple-snackbar'
import * as snackbar from '../services/snackbarService';

export const Navigator = () => {

  useEffect(() => {
    setIsLoggedIn(auth.loginCheckOnly());
  }, []);

  const [errorMessage, setErrorMessage] = useState(false);

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [openSnackbarSuccess] = useSnackbar(snackbar.successStyle);

  // const [openSnackbarFail] = useSnackbar(snackbar.failStyle);

  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const [logInLoader, setLogInLoader] = useState(false);

  const [signUpLoader, setSignUpLoader] = useState(false);

  const modalCloseBtn = React.useRef(null);

  const modalSignUpCloseBtn = React.useRef(null);

  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? 'darkblue' : '',
      textDecoration: isActive ? 'underline' : ''
    }
  }

  function handleErrorMessage(message, status) {
    setShowErrorMessage(status);
    setErrorMessage(message);
    // if (status) {
    //   setTimeout(() => {
    //     handleErrorMessage('', false);
    //   }, 3000);
    // }
  }

  function handleLoggedOutStatus(status) {
    if (!status) {
      auth.logOut();
      setIsLoggedIn(false);
    }
  }

  function handleLogIn(event) {
    event.preventDefault();
    setLogInLoader(true);
    const userObj = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    // Validations and logic is in auth service
    auth.loginCheck(userObj, modalCloseBtn, event).then(() => {
      setIsLoggedIn(auth.loginCheckOnly());
      openSnackbarSuccess('Logged In Successfully');
      setLogInLoader(false);
      handleErrorMessage('', false);
    }).catch((errMsg) => {
      console.log('Error In Login .....');
      handleErrorMessage(errMsg, true);
      // openSnackbarFail('Error in login please try after some time ...');
      setLogInLoader(false);
    });
  }

  function handleSignUp(event) {
    event.preventDefault();
    setSignUpLoader(true);
    const userObj = {
      name: event.target.name.value,
      lastname: event.target.lastname.value,
      mobileno: event.target.mobileno.value,
      email: event.target.email.value,
      gender: event.target.gender.value,
      password: event.target.password.value,
      confirmpassword: event.target.confirmpassword.value,
      date: event.target.date.value
    }
    // All the validations and logics are in auth service
    auth.signUpCheck(userObj, modalSignUpCloseBtn, event).then(() => {
      setIsLoggedIn(auth.loginCheckOnly());
      setSignUpLoader(false);
      openSnackbarSuccess('Account Created Successfully');
    }).catch((errMsg) => {
      handleErrorMessage(errMsg, true);
      console.log('Error in signup .....');
      setSignUpLoader(false);
    });
  }

  return (
    <div>
      {/* Start navbar */}
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light h">
        <div className="container">
          <NavLink className="navbar-brand fs-3 animate__animated animate__swing" to={'/'}><span className='text-primary'>B</span>ike <span className='text-danger'>R</span>ental</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item">
                <NavLink style={navLinkStyle} className="nav-link px-3" aria-current="page" to={'/'}>Home</NavLink>
                <span></span>
              </li>
              <li className="nav-item">
                <NavLink style={navLinkStyle} className="nav-link px-3" to={'/about-us'}>About us</NavLink>
                <span></span>
              </li>
              <li className="nav-item">
                <NavLink style={navLinkStyle} className="nav-link px-3" to={'/bike-listing'}>Bike listing</NavLink>
                <span></span>
              </li>
              <li className="nav-item">
                <NavLink style={navLinkStyle} className="nav-link px-3" to={'/FAQs'}>FAQs</NavLink>
                <span></span>
              </li>
              <li className="nav-item">
                <NavLink style={navLinkStyle} className="nav-link px-3" to={'/contact-us'}>Contact us</NavLink>
                <span></span>
              </li>
              {!isLoggedIn ? <li className="nav-item">
                <a className="nav-link px-3" href="/#" data-bs-toggle="modal" data-bs-target="#login">Login/register</a>
                <span></span>
              </li> : null}
              {isLoggedIn ? <div className='d-flex align-items-center justify-content-center'><span><ProfileLogo handleLoggedOutStatus={handleLoggedOutStatus} /></span></div> : null}
            </ul>
          </div>
        </div>
      </nav>
      {/*     End Of Navbar     */}

      {/*     Start Login Modal     */}
      <div className="modal fade" id="login">
        <div className="modal-dialog">
          <div className="modal-content" id="loginbox">
            <div className="modal-header">
              <div className="col-11 text-secondary">
                <h1>Log in</h1>
              </div>
              <div className="col-1"><button ref={modalCloseBtn} onClick={() => { handleErrorMessage('', false) }} type="button" className="btn btn-close bg-light" data-bs-dismiss="modal" />
              </div>
            </div>
            <div className="modal-body py-4">
              {showErrorMessage ?
                <div className='alert alert-danger'>{errorMessage}</div>
                :
                ''
              }
              <form onSubmit={handleLogIn}>
                <label htmlFor='email' className="form-label my-0">Email</label>
                <input id='email' name='email' type="email" placeholder="Enter Your Email" className="form-control my-2" required />
                <label htmlFor='password' className="form-label mt-3 mb-0">Password</label>
                <input id='password' name='password' type="password" placeholder="Enter Your Password" className="form-control my-2 mb-3" required />
                <a href="/#" className data-bs-toggle="modal" data-bs-target="#signup">Don't have a account ?</a>
                <div className="col"><a href="/#" className>Forgot password ?</a></div>
                <button disabled={logInLoader} type="submit" className="btn btn-success mt-2">
                  {logInLoader ? <span className='me-2'>
                    <div className="spinner-border spinner-border-sm text-dark" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </span> : ''}
                  <span>Log in</span>
                </button>
                <button type="button" className="btn btn-secondary mt-2 ms-2" data-bs-dismiss="modal" onClick={() => { handleErrorMessage('', false) }}>Close</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*     End Login Modal     */}

      {/*    Start Signup Modal     */}
      <div className="modal fade" id="signup">
        <div className="modal-dialog">
          <div className="modal-content" id="signupbox">
            <div className="modal-header">
              <div className="col-11">
                <h1 className="text-secondary">Sign Up</h1>
              </div>
              <div className="col-1"><button ref={modalSignUpCloseBtn} onClick={() => { handleErrorMessage('', false) }} type="button" className="btn btn-close bg-light" data-bs-dismiss="modal" />
              </div>
            </div>
            <div className="modal-body">
              {showErrorMessage ?
                <div className='alert alert-danger'>{errorMessage}</div>
                :
                ''
              }
              <form onSubmit={handleSignUp}>
                <label className="form-label my-0" htmlFor="name">Name<span className="text-danger">*</span></label>
                <input id='name' name='name' type="text" placeholder="Enter Your Name" className="form-control py-1 my-2" title="Please Enter Valid Name" minLength={3} pattern="^[a-zA-Z]*$" required />
                <label htmlFor='lastname' className="form-label my-0">Last Name<span className="text-danger">*</span></label>
                <input id='lastname' name='lastname' type="text" placeholder="Enter Your Last Name" className="form-control py-1 my-2" title="Please Enter Valid Last Name" minLength={3} pattern="^[a-zA-Z]*$" required />
                <label htmlFor='mobileno' className="form-label my-0">Mobile Number<span className="text-danger">*</span></label>
                <input id='mobileno' name='mobileno' type="text" placeholder="Enter Your Mobile Number" className="form-control py-1 my-2" title="Please Enter Valid Phone Number" minLength={10} maxLength={10} pattern="^[0-9]*$" required />
                <label htmlFor='emailSignup' className="form-label my-0">Email Adress<span className="text-danger">*</span></label>
                <input id='emailSignup' name='email' type="email" placeholder="Enter Your Email Adress" className="form-control py-1 my-2" title="Please Enter A Valid Email" required />
                <label htmlFor='gender' className="form-label my-0">Gender<span className="text-danger">*</span></label>
                <select id='gender' name='gender' className="form-select mt-1 form-select-sm" aria-label="Default select example" title="Please Select One Of Above" required>
                  <option value>none</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
                <label htmlFor='date' className="form-label my-0 mt-1">Date Of Birth<span className="text-danger">*</span></label>
                <input id='date' name='date' type="date" className="form-control py-1 my-2" title="Please Fill It Properly" required />
                <label htmlFor='passwordSignup' className="form-label my-0">Password<span className="text-danger">*</span></label>
                <input id='passwordSignup' name='password' type="password" pattern="(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppwecase and lowercase letter, and at least 8 or more characters" placeholder="Example: 1@Aabcde" className="form-control py-1 my-2" required />
                <label htmlFor='confirmpassword' className="form-label my-0">Confirm Password<span className="text-danger">*</span></label>
                <input id='confirmpassword' name='confirmpassword' type="password" pattern="(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppwecase and lowercase letter, and at least 8 or more characters" placeholder="Example: 1@Aabcde" className="form-control py-1 my-2" required />
                <input type="checkbox" required className="form-check-input mt-2" />
                <label className="mt-1">I Agree With <a href="/#">Terms &amp; conditions</a></label>
                <div className="col-12">
                  <button disabled={signUpLoader} type='submit' className="btn btn-success my-3" >
                    {signUpLoader ? <span className='me-2'>
                      <div className="spinner-border spinner-border-sm text-dark" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </span> : ''}
                    <span>
                      Sign Up
                    </span>
                  </button>
                  <button type='button' onClick={() => { handleErrorMessage('', false) }} className="btn btn-secondary my-3 ms-2" data-bs-dismiss="modal">Close</button>
                </div>
                {/* <span>Already got an account? <button data-bs-dismiss="modal">Login here</button></span> */}
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*     End Signup Modal     */}
    </div>
  )
}
