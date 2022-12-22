import React, { useEffect, useState } from 'react';
import * as dataShareService from '../services/dataShareService';

export const ManageBookingUser = (props) => {

  const [bookingId, setBookingId] = useState('');
  let bike_list_data = props.bookingDetails;
  const modalPopUpCloseBtn = React.useRef(null);
  const [bikeBookingList, setBikeBookingList] = useState('');

  useEffect(() => {
    setBikeBookingList(updateBikeList(bike_list_data));
  }, [bike_list_data]);

  console.log(props)
  const handleCancleBooking = (id) => {
    setBookingId(id);
  }

  function deleteBikeFromList() {
    let bike_list = props.bookingDetails,
      index = bike_list.findIndex((m) => m.id === bookingId);
    bike_list.splice(index, 1);
    setBikeBookingList(updateBikeList(bike_list_data));
  }

  function confirmCancleBooking() {
    dataShareService.cancleBooking(bookingId).then(() => {
      modalPopUpCloseBtn.current.click();
      deleteBikeFromList();
    }).catch(
      () => {
        alert('Error in cancle booking')
      });
  }

  function updateBikeList(bikeBookingList) {
    return bikeBookingList.map((data, index) => {
      return <div key={data.id} className='row w-75 mx-auto py-2 align-items-center border border-2 border-secondary mb-1 px-2'>
        <div className='col'>({index + 1}) {data.bike_name}</div>
        <div className='col'>{data.start_date}</div>
        <div className='col'>{data.end_date}</div>
        <div className='col text-end'><button data-bs-toggle="modal" data-bs-target='#confirm-cancle' className='btn btn-danger btn-sm' onClick={() => { handleCancleBooking(data.id) }} >Cancle Booking</button></div>
      </div>
    })
  }

  return (
    <div>
      <div className='row w-75 mx-auto py-2 align-items-center border border-2 border-dark mb-1 px-2'>
        <div className='col '><b>Bike Name</b></div>
        <div className='col'><b>Start Date</b></div>
        <div className='col'><b>End Date</b></div>
        <div className='col text-end'><b>Cancle Booking</b></div>
      </div>

      {/* Show Booking Table Start */}
      {bikeBookingList ?

        bikeBookingList

        : null}
      {/* Show Booking Table Stop */}

      <div className="modal fade" id="confirm-cancle">
        <div className="modal-dialog">
          <div className="modal-content p-5">
            <h2>Are you really want to cancle booking ??</h2>
            <p>
              <button className='btn btn-danger' onClick={confirmCancleBooking}>Yes</button>
              <button className='btn btn-secondary ms-3' ref={modalPopUpCloseBtn} data-bs-dismiss="modal">No</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
