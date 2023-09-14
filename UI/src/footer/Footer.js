import './Footer.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Foot(props) {
    const [foot, setFoot] = useState();
    useEffect(()=>{
        setInterval(()=>{
            if (localStorage.getItem('role') === 'admin' || localStorage.getItem('role') === 'user') {
                setFoot(
                    <div className="container-fluid text-white" style={{"background": "#061429"}}>
                        <div className="container">
                            <div className="row ">
                                <div className="col-lg-8 col-md-6">
                                    <div className="d-flex align-items-center " style={{"height": "75px"}}>
                                        <p className="mb-0">&copy; <a className="text-white border-bottom" href="#">Porter Faster Service</a>. All Rights Reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            else {
                setFoot(
                    <>
                        <div className="container-fluid bg-dark text-light wow fadeInUp" data-wow-delay="0.1s">
                            <div className="container">
                                <div className="row gx-5">
                                    <div className="col-lg-4 col-md-6 footer-about">
                                        <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                                            <Link to="/" className="navbar-brand m-0"><h1 className="m-0 text-white" style={{"fontSize":"30px","textAlign":"center"}}>VIMALA CONVENT</h1></Link>
                                            <p className="mt-3 mb-4">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
                                        </div>
                                    </div>  
                                    <div className="col-lg-8 col-md-6">
                                        <div className="row gx-5">
                                            <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                                    <h3 className="text-light mb-0">Get In Touch</h3>
                                                </div>
                                                <div className="d-flex mb-2">
                                                    <i className="bi bi-geo-alt text-primary me-2"></i>
                                                    <p className="mb-0">{props.add}</p>
                                                </div>
                                                <div className="d-flex mb-2">
                                                    <i className="bi bi-envelope-open text-primary me-2"></i>
                                                    <p className="mb-0">{props.email}</p>
                                                </div>
                                                <div className="d-flex mb-2">
                                                    <i className="bi bi-telephone text-primary me-2"></i>
                                                    <p className="mb-0">{props.phone}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                                    <h3 className="text-light mb-0">Quick Links</h3>
                                                </div>
                                                <div className="link-animated d-flex flex-column justify-content-start">
                                                    <div className="ficon">
                                                        <i className="bi bi-arrow-right text-primary me-2"></i><Link to="/" className="text-light mb-2">Home</Link>
                                                    </div>
                                                    <div className="ficon">
                                                        <i className="bi bi-arrow-right text-primary me-2"></i><Link to="/about"  className="text-light mb-2">About Us</Link>
                                                    </div>
                                                    <div className="ficon">
                                                        <i className="bi bi-arrow-right text-primary me-2"></i><Link to="/service"  className="text-light mb-2">Our Services</Link>
                                                    </div>
                                                    <div className="ficon">
                                                        <i className="bi bi-arrow-right text-primary me-2"></i><Link to="/contact"  className="text-light">Contact Us</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                                <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                                    <h3 className="text-light mb-0">Popular Links</h3>
                                                </div>
                                                <div className="link-animated d-flex flex-column justify-content-start">
                                                    <div className="ficon">
                                                        <i className="bi bi-arrow-right text-primary me-2"></i><Link to="/" className="text-light mb-2">Home</Link>
                                                    </div>
                                                    <div className="ficon">
                                                        <i className="bi bi-arrow-right text-primary me-2"></i><Link to="/about"  className="text-light mb-2">About Us</Link>
                                                    </div>
                                                    <div className="ficon">
                                                        <i className="bi bi-arrow-right text-primary me-2"></i><Link to="/service"  className="text-light mb-2">Our Services</Link>
                                                    </div>
                                                    <div className="ficon">
                                                        <i className="bi bi-arrow-right text-primary me-2"></i><Link to="/contact"  className="text-light">Contact Us</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid text-white" style={{"background": "#061429"}}>
                            <div className="container text-center">
                                <div className="row justify-content-end">
                                    <div className="col-lg-8 col-md-6">
                                        <div className="d-flex align-items-center justify-content-center" style={{"height": "75px"}}>
                                            <p className="mb-0">&copy; <a className="text-white border-bottom" href="#">Vimala Convent School</a>. All Rights Reserved.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            }
        }, 100);
    },[]);
  return (
    <>
        {foot}
    </>
  );
}

export default Foot;