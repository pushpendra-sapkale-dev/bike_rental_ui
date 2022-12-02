import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as auth from '../services/authService';

export const ProfileLogo = (props) => {

    const navigate = useNavigate();

    function goToManageBike() {
        navigate(`manage-booking/${auth.getUserId()}`);
    }

    return (
        <div className="dropdown-center nav-item d-flex align-items-center">
            <a class="dropdown-toggle" role="button" href data-bs-toggle="dropdown" aria-expanded="false">
                <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
            </a>
            <ul className="dropdown-menu">
                <li className='d-block border-bottom'><a className="dropdown-item" href >
                    Profile
                </a></li>
                <li className='d-block border-bottom' onClick={goToManageBike}><a className="dropdown-item" href >Manage Booking </a></li>
                <li className='d-block border-bottom'><a className="dropdown-item" href >Help</a></li>
                <li className='d-block' onClick={() => props.handleLoggedOutStatus(false)}><a className="dropdown-item" href >Logout </a></li>
            </ul>
        </div>
    )
}
