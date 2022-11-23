import React, { useState } from 'react';
import * as auth from '../services/authService';

export const ProfileLogo = () => {
    const [showProfileMenu, setProfileMenu] = useState(false);

    const styles = {
        pyramid: {
            width: '0px',
            borderLeft: '10px dotted transparent',
            borderRight: '10px solid transparent',
            borderBottom: '10px solid blue',
            margin: 'auto'
        },
        pyramidWrapper: {
            position: 'relative'
        },
        accountList: {
            position: 'absolute',
            height: '30px',
            top: '100%',
            width: '200px'
        }
    }

    function handleSetProfileMenu(status) {
        setProfileMenu(status);
    }

    return (
        <li style={styles.pyramidWrapper} className="nav-item d-flex align-items-center justify-content-center">
            <svg onClick={() => { handleSetProfileMenu(!showProfileMenu) }} className='mx-3' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
            {showProfileMenu ? <div style={styles.accountList}>
                <div style={styles.pyramidWrapper}>
                    <div id='pyramid' style={styles.pyramid}></div>
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
            </div> : null}
        </li >
    )
}
