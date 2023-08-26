import './About.css';

function About() {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                        <h1 className="mb-0">The Best Public School with 10 years of Experience</h1>
                    </div>
                    <p className="mb-4">We have come across many problems and barriers in our experience but we have been fighting with them and have been able to reach here and you have also contributed in all this.</p>
                    <div className="row g-0 mb-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Principle Support</h5>
                            <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Good Teaching Skills</h5>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                        <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{"width": "60px", "height": "60px"}}>
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ps-4">
                            <h5 className="mb-2">Call to ask any question</h5>
                            <h4 className="text-primary mb-0">+91-70469-46921</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5" style={{"minHeight": "500px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/happy-birthday-pm-modi-ji-202009-1600337048.jpg" style={{"objectFit": "cover"}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
