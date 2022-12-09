import React, { useEffect, useState } from 'react';
import * as dataShareService from '../services/dataShareService';
import { useParams } from 'react-router-dom';
import { ManageBookingUser } from './ManageBookingUser';


const ManageBooking = () => {

  let userId = useParams().user_id;

  useEffect(() => {
    const getBikeBookingList = () => {
      dataShareService.getManageBookingList({ user_id: userId }).then((data) => {
        setBikeBookingDetails(data);
        if (data.length > 0) {
          setShowTableStatus(true);
        }
      }).catch();
    }
    getBikeBookingList();
  }, [userId])


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

  const [showTableStatus, setShowTableStatus] = useState(null);
  const [bikeBookingDetails, setBikeBookingDetails] = useState(null);

  return (
    <div className='container pt-5 mt-5'>
      <header className='text-center mb-5'>
        <h1>
          <span style={styles.header} className="px-3">Manage Booking</span>
        </h1>
      </header>
      <div className='pt-4'>
        <h3 style={styles.subhead}>My Booking</h3>
      </div>
      {/* Bike List Component */}
      <div className='py-5'>
        {showTableStatus ? <ManageBookingUser bookingDetails={bikeBookingDetails} userId={userId}/> : <h3 className='text-primary text-center'>You do not have any booking !!</h3>}
      </div>
    </div>
  )
}

export default ManageBooking;