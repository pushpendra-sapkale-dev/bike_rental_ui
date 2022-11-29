import React from 'react';
import { useParams } from 'react-router-dom';
import { Royal } from './bike-list/Royal';
import { Himalayan } from './bike-list/Himalayan';
import { Triumph } from './bike-list/Triumph';
import { Hero } from './bike-list/Hero';
import { Kawasaki } from './bike-list/Kawasaki';
import * as auth from '../services/authService';


const BikeInfo = () => {
  let bike_name = useParams().bike_name;
  const modalPopUpBtn = React.useRef(null);

  // Getting open modal type status from child components
  function getOpenModalType() {
    const status = auth.loginCheckOnly() ? '#date-time' : '#login';
    document.getElementById('modal-btn').setAttribute('data-bs-target', status);
    modalPopUpBtn.current.click();
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
            <form>
              <div>
                <label htmlFor='start-date' className="form-label mt-2">Start Date<span className="text-danger"> *</span></label>
                <input id='start-date' name='start-date' type="date" className="form-control" required />
              </div>
              <div>
                <label htmlFor='end-date' className="form-label mt-2 mx-auto">End Date<span className="text-danger"> *</span></label>
                <input id='end-date' name='end-date' type="date" className="form-control" required />
              </div>
              <div>
                <label htmlFor='licence' className="form-label mt-2 mx-auto">Driving Licence Number<span className="text-danger"> *</span></label>
                <input id='licence' name='licence' type="text" placeholder="Enter Your Driving Licence Number Here" className="form-control" required />
              </div>
              <div>
                <label htmlFor='national-id' className="form-label mt-2 mx-auto">National Id<span className="text-danger"> *</span></label>
                <input id='national-id' name='national-id' type="text" placeholder="Enter Your National Id Number Here" className="form-control" required />
              </div>
              <input type="submit" defaultValue="Submit" className="mt-4 mb-3 btn btn-success rounded-pill px-md-5" />
              <button type='button' data-bs-dismiss="modal" className='ms-3 mb-3 mt-4 px-md-5 rounded-pill btn btn-secondary'>Close</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BikeInfo;
