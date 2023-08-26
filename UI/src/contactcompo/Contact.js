import './Contact.css';
function Con(props) {
  return (
  	<>
	    <div className="container-xxl py-5">
	        <div className="container">
	            <div className="text-center section-title position-relative pb-3 mb-5">
                    <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
                    <h1 className="mb-0">Contact for Any Query</h1>
                </div>
	            <div className="row g-4">
	                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
	                    <h5>Get In Touch</h5>
	                    <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done</p>
	                    <div className="d-flex align-items-center mb-3">
	                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"  style={{"width": "50px", "height": "50px"}}>
	                            <i className="fa fa-map-marker-alt text-white"></i>
	                        </div>
	                        <div className="ms-3">
	                            <h5 className="text-primary">Office</h5>
	                            <p className="mb-0">{props.add}</p>
	                        </div>
	                    </div>
	                    <div className="d-flex align-items-center mb-3">
	                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{"width": "50px", "height": "50px"}}>
	                            <i className="fa fa-phone-alt text-white"></i>
	                        </div>
	                        <div className="ms-3">
	                            <h5 className="text-primary">Mobile</h5>
	                            <p className="mb-0">{props.phone}</p>
	                        </div>
	                    </div>
	                    <div className="d-flex align-items-center">
	                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"  style={{"width": "50px", "height": "50px"}}>
	                            <i className="fa fa-envelope-open text-white"></i>
	                        </div>
	                        <div className="ms-3">
	                            <h5 className="text-primary">Email</h5>
	                            <p className="mb-0">{props.email}</p>
	                        </div>
	                    </div>
	                </div>
	                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
	                	<iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1580.3038432379956!2d76.06209359665749!3d22.17961143906875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962986a847bb1f3%3A0x5a5d0451f0e3ac5b!2sVimala%20Convent%20Higher%20Secondary%20School!5e1!3m2!1sen!2sin!4v1692698954003!5m2!1sen!2sin" 
	                	frameBorder="0" style={{"minHeight": "300px", "border":"0"}} aria-hidden="false"
	                	allowFullScreen="" tabIndex="0"></iframe>
	                </div>
	                <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
	                    <form>
	                        <div className="row g-3">
	                            <div className="col-md-6">
	                                <div className="form-floating">
	                                    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
	                                    <label htmlFor="name">Your Name</label>
	                                </div>
	                            </div>
	                            <div className="col-md-6">
	                                <div className="form-floating">
	                                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
	                                    <label htmlFor="email">Your Email</label>
	                                </div>
	                            </div>
	                            <div className="col-12">
	                                <div className="form-floating">
	                                    <input type="text" className="form-control" id="subject" placeholder="Subject"/>
	                                    <label htmlFor="subject">Subject</label>
	                                </div>
	                            </div>
	                            <div className="col-12">
	                                <div className="form-floating">
	                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{"height": "150px"}}></textarea>
	                                    <label htmlFor="message">Message</label>
	                                </div>
	                            </div>
	                            <div className="col-12">
	                                <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
	                            </div>
	                        </div>
	                    </form>
	                </div>
	            </div>
	        </div>
	    </div>
	</>
  );
}

export default Con;