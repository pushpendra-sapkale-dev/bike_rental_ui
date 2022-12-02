import React from 'react';
import { useParams } from 'react-router-dom';


const Profile = () => {

    let userId = useParams().user_id;


    const styles = {
        header: {
            border: 'solid green',
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
            padding: '10px'
        },
        subhead: {
            borderLeft: '3px solid purple',
            paddingLeft: '10px'
        }
    }

    return (
        <div className='container pt-5 mt-5'>
            <header className='text-center mb-5'>
                <h1>
                    <span style={styles.header} className="px-3">My Profile</span>
                </h1>
            </header>
            <div className='pt-4'>
                <h3 style={styles.subhead}>My Profile</h3>
            </div>
            <div className='py-5'>

            </div>
        </div>
    )
}

export default Profile;
