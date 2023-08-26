import './Header.css';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Secure from '../security/secure';
function Head(props) {
    const [head, setHead] = useState();
    useEffect(()=>{
        setInterval(()=>{
            if (localStorage.getItem('role') === 'admin') {
                setHead(
                    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                        <div className="row gx-0">
                            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                                <div className="d-inline-flex align-items-center" style={{"height": "45px"}}>
                                    <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>{localStorage.getItem('address')}</small>
                                    <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+91-{localStorage.getItem('mobile')}</small>
                                    <small className="text-light"><i className="fa fa-envelope-open me-2"></i>{localStorage.getItem('email')}</small>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center text-lg-end">
                                <div className="d-inline-flex align-items-center" style={{"height": "45px"}}>
                                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="https://twitter.com/i/flow/login" target="blank"><i className="fab fa-twitter fw-normal"></i></Link>
                                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="https://www.facebook.com/vchssmateys/" target="blank"><i className="fab fa-facebook-f fw-normal"></i></Link>
                                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="https://www.instagram.com/vchs.sanawad/" target="blank"><i className="fab fa-instagram fw-normal"></i></Link>
                                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" to ="https://www.youtube.com/results?search_query=vimala+convent+sanawad" target="blank"><i className="fab fa-youtube fw-normal"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            else if (localStorage.getItem('role') === 'user') {
                setHead(
                    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                        <div className="row gx-0">
                            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                                <div className="d-inline-flex align-items-center" style={{"height": "45px"}}>
                                    <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>{localStorage.getItem('address')}</small>
                                    <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+91-{localStorage.getItem('mobile')}</small>
                                    <small className="text-light"><i className="fa fa-envelope-open me-2"></i>{localStorage.getItem('email')}</small>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center text-lg-end">
                                <div className="d-inline-flex align-items-center" style={{"height": "45px"}}>
                                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="https://twitter.com/i/flow/login" target="blank"><i className="fab fa-twitter fw-normal"></i></Link>
                                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="https://www.facebook.com/vchssmateys/" target="blank"><i className="fab fa-facebook-f fw-normal"></i></Link>
                                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="https://www.instagram.com/vchs.sanawad/" target="blank"><i className="fab fa-instagram fw-normal"></i></Link>
                                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" to ="https://www.youtube.com/results?search_query=vimala+convent+sanawad" target="blank"><i className="fab fa-youtube fw-normal"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            else {
                setHead(
                    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                        <div className="row gx-0">
                            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                                <div className="d-inline-flex align-items-center" style={{"height": "45px"}}>
                                    <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>{props.add}</small>
                                    <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>{props.phone}</small>
                                    <small className="text-light"><i className="fa fa-envelope-open me-2"></i>{props.email}</small>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center text-lg-end">
                                <div className="d-inline-flex align-items-center" style={{"height": "45px"}}>
                                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="https://twitter.com/i/flow/login" target="blank"><i className="fab fa-twitter fw-normal"></i></Link>
                                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="https://www.facebook.com/vchssmateys/" target="blank"><i className="fab fa-facebook-f fw-normal"></i></Link>
                                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" to="https://www.instagram.com/vchs.sanawad/" target="blank"><i className="fab fa-instagram fw-normal"></i></Link>
                                    <Link className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" to ="https://www.youtube.com/results?search_query=vimala+convent+sanawad" target="blank"><i className="fab fa-youtube fw-normal"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }, 100);
    },[]);
  return (
    <div>
        <Secure/>
        {head}
    </div>
  );
}

export default Head;
