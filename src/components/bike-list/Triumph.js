import React from 'react'

export const Triumph = (props) => {

    function handleBookClick() {
        props.sendOpenModalType();
    }

    return (
        <div>
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-md-4">
                        <img src="images/bikes/tiger/tiger2.PNG" height="70%" width="100%" alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src="images/bikes/tiger/tiger3.PNG" height="70%" width="100%" alt="" />
                    </div>
                    <div className="col-md-4">
                        <img src="images/bikes/tiger/tiger4.PNG" height="70%" width="100%" alt="" />
                    </div>
                </div>
                <div className="container">
                    <div className="row pb-5">
                        <div className="col">
                            <h1>About Bike</h1>
                            <p className="fs-4">The Tiger 800 remains one of the default options for those seeking
                                a middleweight adventure tourer. The Tiger 800 XC is designed as a more off-road vehicle.
                                The XCx is only off-road-biased version of the Tiger 800 available at the moment in the
                                Indian market. It runs 43mm diameter WP front forks with 220mm of travel. They have
                                adjustable rebound and compression. At the rear is a WP monoshock with 215mm of travel.
                                Since it is biased towards the unpaved path, the Tiger XCx gets spoked rims with 21-inch
                                front and 19-inch rear diameters. Bridgestone Battlewing tyres are standard,
                                but one can opt for Pirelli Scorpion Rally tyres if they need more grip off-road.
                                The base equipment list has switchable ABS, a traction control system (TCS),
                                adjustable seat height, adjustable brake and clutch levers and the 12V and USB power
                                sockets. The XCx also gets a five-inch TFT display for the instrument cluster,
                                the ‘blade’ LED DRLs, LED indicators, the ‘Off-Road Pro’ riding mode, a 5-step adjustable
                                windscreen, cruise control, heated grips, hand guards, an aluminium sump guard, engine
                                protection bars, and a plastic radiator guard.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src="images/bikes/tiger/tiger1.PNG" height="100%" width="100%" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1>Triumph Tiger 800 XCx</h1>
                        <h4>Displacement : 800 cc</h4>
                        <h4>Mileage : 27 kmpl</h4>
                        <h4>Kerb Weight : 235 kg</h4>
                        <h4>Max Speed : 210 km/h</h4>
                        <h4>Fuel Tank Capacity : 19 L</h4>
                        <h4>One Day Price</h4>
                        <h4><i className="fa fa-inr" aria-hidden="true" /> 2500</h4>
                        <button className="btn btn-success btn-lg mt-md-5" onClick={handleBookClick}>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
