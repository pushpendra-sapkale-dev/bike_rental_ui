import React from 'react'

export const Kawasaki = (props) => {

  function handleBookClick() {
    props.sendOpenModalType();
  }

  return (
    <div>
      <div className="container-fluid py-5">
        <div className="row align-items-end">
          <div className="col-md-4">
            <img src="images/bikes/kawasaki/kawasaki1.PNG" height="70%" width="100%" alt="" />
          </div>
          <div className="col-md-4">
            <img src="images/bikes/kawasaki/kawasaki2.PNG" height="70%" width="100%" alt="" />
          </div>
          <div className="col-md-4">
            <img src="images/bikes/kawasaki/kawasaki3.PNG" height="70%" width="100%" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row py-5">
            <div className="col">
              <h1>About Bike</h1>
              <p className="fs-4">The Kawasaki KLX 110 is powered by a 112 cc air-cooled engine which
                produces of power, It has a fuel tank of 3.8 L.
                It can develop a power of 7.3 PS and a torque of 8.0 Nm. It comes with rear
                drum brakes, This bike weighs 76 kg and has a fuel
                tank capacity of 15 liters
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src="images/bikes/kawasaki/kawasaki1.PNG" height="100%" width="100%" alt="" />
          </div>
          <div className="col-md-6">
            <h1>Kawasaki KLX110</h1>
            <h4>Displacement : 112 cc</h4>
            <h4>Mileage : 20 kmpl</h4>
            <h4>Kerb Weight : 76 kg</h4>
            <h4>Max Speed : 80 km/h</h4>
            <h4>Fuel Tank Capacity : 3.8 L</h4>
            <h4>One Day Price</h4>
            <h4><i className="fa fa-inr" aria-hidden="true" /> 1500</h4>
            <button className="btn btn-success btn-lg mt-md-5" onClick={handleBookClick}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
