import React from 'react';
import { useParams } from 'react-router-dom';
import { Royal } from './bike-list/Royal';
import { Himalayan } from './bike-list/Himalayan';
import { Triumph } from './bike-list/Triumph';
import { Hero } from './bike-list/Hero';
import { Kawasaki } from './bike-list/Kawasaki';


const BikeInfo = () => {
  let bike_name = useParams().bike_name;
  return (
    <div>
      {/*     Start Bike Details     */}

      {/* Royal */}


      {bike_name === 'royal' ? <Royal /> : null}


      {/* Himalayan */}

      {bike_name === 'himalayan' ? <Himalayan /> : null}


      {/* Triumph */}

      {bike_name === 'triumph' ? <Triumph /> : null}


      {/* Hero */}

      {bike_name === 'hero' ? <Hero /> : null}


      {/* Kawasaki */}

      {bike_name === 'kawasaki' ? <Kawasaki /> : null}



      {/*     Date & Time */}
      <div className="modal fade" id="dati">
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
              <input type="submit" defaultValue="Submit" className="my-3 btn btn-success rounded-pill px-md-5" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BikeInfo;
