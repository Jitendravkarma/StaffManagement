import './Home.css';
function Home(props) {
  return (
    <div className="container-xxl py-5" style={props.mode}>
    	<div className="section-title text-center position-relative pb-3 mb-2">
            <h5 className="fw-bold text-primary text-uppercase">Home Page</h5>
            <h1 className="mb-0">Our Activities</h1>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-6 mt-3 mb-3 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <img src="assets/img/study.jpg" style={{"width":"100%","height":"250px","objectFit":"cover"}}/>
                            <h3 className="mt-3">Study</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6 mt-3 mb-3 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <img src="assets/img/game.jpg" style={{"width":"100%","height":"250px","objectFit":"cover"}}/>
                            <h3 className="mt-3">Games</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6 mt-3 mb-3 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <img src="assets/img/play.jpg" style={{"width":"100%","height":"250px","objectFit":"cover"}}/>
                            <h3 className="mt-3">Play ground</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6 mt-3 mb-3 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4">
                            <img src="assets/img/creative.jpg" style={{"width":"100%","height":"250px","objectFit":"cover"}}/>
                            <h3 className="mt-3">Creativities</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;