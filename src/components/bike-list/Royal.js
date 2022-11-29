import React from 'react';

export const Royal = (props) => {

  function handleBookClick() {
    props.sendOpenModalType();
  }

  return (
    <div>
      <div className="container-fluid py-5">
        <div className="row align-items-top">
          <div className="col-md-4">
            <img src="images/bikes/royalenfield/royal2.PNG" className="img-fluid" alt="" />
          </div>
          <div className="col-md-4 mt-5 mt-md-0">
            <img src="images/bikes/royalenfield/royal3.PNG" className="img-fluid" alt="" />
          </div>
          <div className="col-md-4 my-5 my-md-0">
            <img src="images/bikes/royalenfield/royal4.PNG" className="img-fluid" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h1>About Bike</h1>
            <p className="fs-4">
              Royal Enfield Bullet 350 is powered by 346 cc engine.This Bullet 350 engine generates a
              power of 19.36 PS @ 5250 rpm and a torque of 28 Nm @ 4000 rpm. Royal Enfield Bullet 350
              gets Drum brakes in the front and rear. The kerb weight of Bullet 350 is 191 Kg. Royal
              Enfield Bullet 350 has Tube Tyre and Spoke Wheels.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <img src="images/bikes/royalenfield/royal1.PNG" height="90%" width="80%" alt="" />
          </div>
          <div className="col-md-6">
            <h1>Royal Enfield Bullet 350cc</h1>
            <h4>Displacement : 350 cc</h4>
            <h4>Mileage : 33 kmpl</h4>
            <h4>Kerb Weight : 191 kg</h4>
            <h4>Max Speed : 112.65 km/h</h4>
            <h4>Fuel Tank Capacity : 13.5 L</h4>
            <h4>One Day Price</h4>
            <h4><i className="fa fa-inr" aria-hidden="true" /> 1900</h4>
            <button className="btn btn-success btn-lg mt-md-5" onClick={handleBookClick}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}