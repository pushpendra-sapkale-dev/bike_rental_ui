import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Royal } from './bike-list/Royal';
import { Himalayan } from './bike-list/Himalayan';
import { Triumph } from './bike-list/Triumph';
import { Hero } from './bike-list/Hero';
import { Kawasaki } from './bike-list/Kawasaki';
import * as auth from '../services/authService';
import * as dataShareService from '../services/dataShareService';
import { useSnackbar } from 'react-simple-snackbar';
import * as snackbar from '../services/snackbarService';



const BikeInfo = () => {

  const [openSnackbarSuccess] = useSnackbar(snackbar.successStyle);
  const [openSnackbarFail] = useSnackbar(snackbar.failStyle);

  let bike_name = useParams().bike_name;
  const modalPopUpBtn = React.useRef(null);
  const modalPopUpCloseBtn = React.useRef(null);
  const [bookBikeLoader, setBookBikeLoader] = useState(false);

  // Getting open modal type status from child components
  function getOpenModalType() {
    const status = auth.loginCheckOnly() ? '#date-time' : '#login';
    document.getElementById('modal-btn').setAttribute('data-bs-target', status);
    modalPopUpBtn.current.click();
  }

  function submitBooking(event) {
    event.preventDefault();
    console.log(event.target.value);
    setBookBikeLoader(true);
    const bookObj = {
      user_id: auth.getUserId(),
      bike_name: bike_name,
      start_date: event.target.start_date.value,
      end_date: event.target.end_date.value,
      licence: event.target.licence.value,
      national_id: event.target.national_id.value
    }
    dataShareService.bookBike(bookObj).then(() => {
      // alert('Bike booked successfully');
      event.target.reset();
      modalPopUpCloseBtn.current.click();
      openSnackbarSuccess('Bike Booked Successfully');
      setBookBikeLoader(false);
    }).catch((errMsg) => {
      // alert('Error in booking bike please try after sometime');
      openSnackbarFail(errMsg)
      setBookBikeLoader(false);
    });
  }

  return (
    <div>
      {/*     Start Bike Details     */}

      {/* Royal */}


      {bike_name === 'royal' ? <Royal sendOpenModalType={getOpenModalType} /> : null}


      {/* Himalayan */}

      {bike_name === 'himalayan' ? <Himalayan sendOpenModalType={getOpenModalType} /> : null}


      {/* Triumph */}

      {bike_name === 'triumph' ? <Triumph sendOpenModalType={getOpenModalType} /> : null}


      {/* Hero */}

      {bike_name === 'hero' ? <Hero sendOpenModalType={getOpenModalType} /> : null}


      {/* Kawasaki */}

      {bike_name === 'kawasaki' ? <Kawasaki sendOpenModalType={getOpenModalType} /> : null}


      {/* This button is invisible only for open modal */}
      <a href data-bs-toggle="modal" id='modal-btn' ref={modalPopUpBtn} className='visually-hidden'><button className="btn btn-success btn-lg mt-md-5">Book Now</button></a>


      {/*     Date & Time */}
      <div className="modal fade" id="date-time">
        <div className="modal-dialog">
          <div className="modal-content p-5">
            <h2>Please Select Date For Journey</h2>
            <form onSubmit={submitBooking}>
              <div className='bg-secondary text-light p-1 rounded fs-4 mt-2 text-center text-capitalize'>
                {bike_name}
              </div>
              <div>
                <label htmlFor='start-date' className="form-label mt-2">Start Date<span className="text-danger"> *</span></label>
                <input id='start-date' name='start_date' type="date" className="form-control" required />
              </div>
              <div>
                <label htmlFor='end-date' className="form-label mt-2 mx-auto">End Date<span className="text-danger"> *</span></label>
                <input id='end-date' name='end_date' type="date" className="form-control" required />
              </div>
              <div>
                <label htmlFor='licence' className="form-label mt-2 mx-auto">Driving Licence Number<span className="text-danger"> *</span></label>
                <input id='licence' name='licence' type="text" placeholder="Enter Your Driving Licence Number Here" className="form-control" required />
              </div>
              <div>
                <label htmlFor='national-id' className="form-label mt-2 mx-auto">National Id<span className="text-danger"> *</span></label>
                <input id='national-id' name='national_id' type="text" placeholder="Enter Your National Id Number Here" className="form-control" required />
              </div>
              <button disabled={bookBikeLoader} type='submit' className="mt-4 mb-3 btn btn-success rounded-pill px-md-5">
                <span>
                  {bookBikeLoader ? <span className='me-2'>
                    <div className="spinner-border spinner-border-sm text-dark" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </span> : ''}
                </span>
                <span>
                  Book Bike
                </span>
              </button>
              <button type='button' ref={modalPopUpCloseBtn} data-bs-dismiss="modal" className='ms-3 mb-3 mt-4 px-md-5 rounded-pill btn btn-secondary'>Close</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BikeInfo;
