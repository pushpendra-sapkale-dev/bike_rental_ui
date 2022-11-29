import React from 'react'

export const Himalayan = (props) => {

  function handleBookClick() {
    props.sendOpenModalType();
  }
  
  return (
    <div>
         <div className="container-fluid py-5">
        <div className="row">
          <div className="col-md-4">
            <img src="images/bikes/himalayan/himalayan2.PNG" height="70%" width="100%" alt="" />
          </div>
          <div className="col-md-4">
            <img src="images/bikes/himalayan/himalayan3.PNG" height="70%" width="100%" alt="" />
          </div>
          <div className="col-md-4">
            <img src="images/bikes/himalayan/himalayan4.PNG" height="70%" width="100%" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row pb-5">
            <div className="col">
              <h1>About Bike</h1>
              <p className="fs-4">The Himalayan is powered by 411cc BS6 engine which develops a power of 24.3 bhp and
                a torque of 32 Nm. With both front and rear disc brakes, Royal Enfield Himalayan comes
                up with anti-locking braking system. This Himalayan bike weighs 199 kg and has a fuel
                tank capacity of 15 liters.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src="images/bikes/himalayan/himalayan1.PNG" height="100%" width="100%" alt="" />
          </div>
          <div className="col-md-6">
            <h1>Royal Enfield Himalayan </h1>
            <h4>Displacement : 411 cc</h4>
            <h4>Mileage : 30 kmpl</h4>
            <h4>Kerb Weight : 199 kg</h4>
            <h4>Max Speed : 145 km/h</h4>
            <h4>Fuel Tank Capacity : 15 L</h4>
            <h4>One Day Price</h4>
            <h4><i className="fa fa-inr" aria-hidden="true" /> 1700</h4>
            <button className="btn btn-success btn-lg mt-md-5" onClick={handleBookClick}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
