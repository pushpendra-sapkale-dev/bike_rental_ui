import React from 'react';
import * as auth from '../services/authService';

export const ProfileLogo = () => {
    return (
        <li style={{
            position: 'relative',
            background: 'red'
        }} className="nav-item d-flex align-items-center justify-content-center">
            <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
            <div style={{
                position: 'absolute',
                height: '30px',
                top: '100%',
                width: '200px'
            }}>
                <div className="list-group">
                    <a
                        href
                        className="list-group-item list-group-item-action"
                        aria-current="true"
                    >
                        Profile
                    </a>
                    <a href className="list-group-item list-group-item-action">
                        Manage Booking
                    </a>
                    <a href className="list-group-item list-group-item-action">
                        Help
                    </a>
                    <a onClick={auth.logOut} href className="list-group-item list-group-item-action">
                        Logout
                    </a>
                </div>

            </div>
        </li>
    )
}
