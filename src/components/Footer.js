import React from 'react'

export const Footer = () => {
    return (
        <div>
            {/*     Footer     */}
            <div className="container-fluid py-5 d-none d-md-block" id="footer">
                <div className="row text-center mb-4">
                    <h1>BIKE RENTAL</h1>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <span>FOR SUPPORT MAIL US :</span>
                        <br />
                        <span><a href>info@example.com</a></span>
                    </div>
                    <div className="col text-center">
                        <span className="fs-5">CONNECT :<a href="https://www.facebook.com" target="_blank" className="ms-3"><i className="fa fa-facebook" /></a>
                            <a href="https://twitter.com" target="_blank" className="ms-3"><i className="fa fa-twitter" /></a>
                            <a href="https://www.instagram.com" target="_blank" className="ms-3"><i className="fa fa-instagram" /></a>
                            <a href="https://www.youtube.com" target="_blank" className="ms-3"><i className="fa fa-youtube" /></a>
                        </span>
                    </div>
                </div>
            </div>
            {/*    footer For Small Screen  */}
            <div className="container-fluid py-5 d-md-none" id="footer">
                <div className="row text-center mb-2">
                    <h1>BIKE RENTAL</h1>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <span>FOR SUPPORT MAIL US :</span>
                        <span><a href>info@example.com</a></span>
                    </div>
                    <div className="col text-center">
                        <span>CONNECT :<br /><a href="https://www.facebook.com" target="_blank" className="ms-3"><i className="fa fa-facebook" /></a>
                            <a href="https://twitter.com" target="_blank" className="ms-3"><i className="fa fa-twitter" /></a>
                            <a href="https://www.instagram.com" target="_blank" className="ms-3"><i className="fa fa-instagram" /></a>
                            <a href="https://www.youtube.com" target="_blank" className="ms-3"><i className="fa fa-youtube" /></a>
                        </span>
                    </div>
                </div>
            </div>
            {/*     End Footer     */}
        </div>
    )
}
