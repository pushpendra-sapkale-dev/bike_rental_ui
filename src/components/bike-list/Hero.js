import React from 'react'

export const Hero = (props) => {

  function handleBookClick() {
    props.sendOpenModalType();
  }

  return (
    <div>
              <div className="container-fluid py-5">
        <div className="row">
          <div className="col-md-4">
            <img src="images/bikes/heroxpuls/heroxpuls2.PNG" height="70%" width="100%" alt="" />
          </div>
          <div className="col-md-4">
            <img src="images/bikes/heroxpuls/heroxpuls3.PNG" height="70%" width="100%" alt="" />
          </div>
          <div className="col-md-4">
            <img src="images/bikes/heroxpuls/heroxpuls4.PNG" height="70%" width="100%" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row pb-5">
            <div className="col">
              <h1>About Bike</h1>
              <p className="fs-4">Hero Xpulse 200T is a commuter bike is powered by 199.6cc BS6 engine which
                develops a power of 17.83 bhp and a torque of 16.15 Nm. With both front and rear disc
                brakes, Hero Xpulse 200T comes up with anti-locking braking system. This Xpulse 200T
                bike weighs 154 kg and has a fuel tank capacity of 13 liters.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src="images/bikes/heroxpuls/heroxpuls1.PNG" height="100%" width="100%" alt="" />
          </div>
          <div className="col-md-6">
            <h1>Hero Xpulse 200T</h1>
            <h4>Displacement : 199.6 cc</h4>
            <h4>Mileage : 42 kmpl</h4>
            <h4>Kerb Weight : 150 kg</h4>
            <h4>Max Speed : 115 km/h</h4>
            <h4>Fuel Tank Capacity : 13 L</h4>
            <h4>One Day Price</h4>
            <h4><i className="fa fa-inr" aria-hidden="true" /> 2100</h4>
            <button className="btn btn-success btn-lg mt-md-5" onClick={handleBookClick}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
