import './Courses.css';

function Service() {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{"maxWidth": "600px"}}>
                <h5 className="fw-bold text-primary text-uppercase">Our Courses</h5>
                <h1 className="mb-0">This courses are the best for your children.</h1>
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa-solid fa-plus text-white" style={{"fontSize":"20px"}}></i>
                        </div>
                        <h4 className="mb-3">Science(Maths)</h4>
                        <p className="m-0">Choose your prefferd course!</p>
                        <a className="btn btn-lg btn-primary rounded" href="/courses">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa-solid fa-flask text-white" style={{"fontSize":"20px"}}></i>
                        </div>
                        <h4 className="mb-3">Science(Biology)</h4>
                        <p className="m-0">Choose your prefferd course!</p>
                        <a className="btn btn-lg btn-primary rounded" href="/courses">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa-solid fa-cash-register text-white" style={{"fontSize":"20px"}}></i>
                        </div>
                        <h4 className="mb-3">Commerce</h4>
                        <p className="m-0">Choose your prefferd course!</p>
                        <a className="btn btn-lg btn-primary rounded" href="/courses">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa-solid fa-house text-white" style={{"fontSize":"20px"}}></i>
                        </div>
                        <h4 className="mb-3">Home Science</h4>
                        <p className="m-0">Choose your prefferd course!</p>
                        <a className="btn btn-lg btn-primary rounded" href="/courses">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa-solid fa-book text-white" style={{"fontSize":"20px"}}></i>
                        </div>
                        <h4 className="mb-3">Arts</h4>
                        <p className="m-0">Choose your prefferd course!</p>
                        <a className="btn btn-lg btn-primary rounded" href="/courses">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="service-icon">
                            <i className="fa-solid fa-tractor text-white" style={{"fontSize":"20px"}}></i>
                        </div>
                        <h4 className="mb-3">Agriculture</h4>
                        <p className="m-0">Choose your prefferd course!</p>
                        <a className="btn btn-lg btn-primary rounded" href="/courses">
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Service;
