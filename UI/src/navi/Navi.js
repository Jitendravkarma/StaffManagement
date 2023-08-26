import './Navi.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
function Nav() {
    const [nav, setNav] = useState();
    useEffect(()=>{
        setInterval(()=>{
            if (localStorage.role === 'admin') {
                setNav(
                    <div className="container-fluid position-relative p-0">
                        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                            <Link className="navbar-brand p-0" to="/"><h1 className="m-0">Admin Panel</h1></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="fa fa-bars"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav ms-auto py-0">
                                    <Link to="/admin" className="nav-item nav-link">Home</Link>
                                    <Link to="/manageuser" className="nav-item nav-link">Manage Users</Link>
                                    <Link to="/addcategory" className="nav-item nav-link">Add Category</Link>
                                    <div className="nav-item dropdown">
                                        <Link data-bs-toggle="dropdown" to="" className="nav-link dropdown-toggle">Update Profile</Link>
                                        <div className="dropdown-menu m-0">
                                            <Link to="/password" className="dropdown-item">Change Password</Link>
                                            <Link to="/profile" className="dropdown-item">Edit Profile</Link>
                                        </div>
                                    </div>
                                    <Link to="/logout" className="nav-item nav-link">Logout</Link>
                                </div>
                            </div>
                        </nav>

                        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="w-100" src="assets/img/carousel1.webp" alt="img" style={{"height":"100px","objectFit":"cover","objectPosition":"top"}}/>
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            else if (localStorage.role === 'user') {
                setNav(
                    <div className="container-fluid position-relative p-0">
                        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                            <Link className="navbar-brand p-0" to="/"><h1 className="m-0">User Panel</h1></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="fa fa-bars"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav ms-auto py-0">
                                    <Link to="/user" className="nav-item nav-link">Home</Link>
                                    <Link to="/studentregistration" className="nav-item nav-link">Student's Registration</Link>
                                    <Link to="/managestudents" className="nav-item nav-link">Manage Student's</Link>
                                    <div className="nav-item dropdown">
                                        <Link data-bs-toggle="dropdown" to="" className="nav-link dropdown-toggle">Update Profile</Link>
                                        <div className="dropdown-menu m-0">
                                            <Link to="/password" className="dropdown-item">Change Password</Link>
                                            <Link to="/profile" className="dropdown-item">Change Profile</Link>
                                            <Link to="/uploadphoto" className="dropdown-item">Upload Photo</Link>
                                        </div>
                                    </div>
                                    <Link to="/logout" className="nav-item nav-link">Logout</Link>
                                </div>
                            </div>
                        </nav>

                        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="w-100" src="assets/img/carousel1.webp" alt="img" style={{"height":"100px","objectFit":"cover","objectPosition":"top"}}/>
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            else {
                setNav(
                    <div className="container-fluid position-relative p-0">
                       <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                            <Link className="navbar-brand p-0" to="/"><h1 className="m-0">VIMALA CONVENT</h1></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="fa fa-bars"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav ms-auto py-0">
                                    <Link to="/" className="nav-item nav-link">Home</Link>
                                    {/*<Link to="/about" className="nav-item nav-link">About</Link>*/}
                                    <Link to="/courses" className="nav-item nav-link">Courses</Link>
                                    <Link to="/teacherstaff" className="nav-item nav-link">Teachers Staff</Link>
                                    <Link to="/studentresult" className="nav-item nav-link">Search Student Result</Link>
                                    {/*<div className="nav-item dropdown">
                                        <Link data-bs-toggle="dropdown" to="" className="nav-link dropdown-toggle">Pages</Link>
                                        <div className="dropdown-menu m-0">
                                            <Link to="/" className="dropdown-item">Pricing Plan</Link>
                                            <Link to="/" className="dropdown-item">Our features</Link>
                                        </div>
                                    </div>*/}
                                    {/*<Link to="/contact" className="nav-item nav-link">Contact</Link>*/}
                                    <Link to="/register" className="nav-item nav-link">Register</Link>
                                    <Link to="/login" className="nav-item nav-link">Login</Link>
                                </div>
                            </div>
                        </nav>

                        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="w-100" style={{"height":"90vh","objectFit":"cover"}} src="assets/img/carousel1.webp" alt="img"/>
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{"maxWidth": "900px"}}>
                                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Authorized Public School</h5>
                                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Certified by the Indian Government</h1>
                                            <Link to="https://www.india.gov.in/" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft" target="blank">See Certificates</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100" style={{"height":"90vh","objectFit":"cover"}} src="assets/img/carousel2.jpg" alt="img"/>
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <div className="p-3" style={{"maxWidth": "900px"}}>
                                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Your childrens future is here</h5>
                                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">One of the top 10 schools</h1>
                                            <Link to="/register" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Register</Link>
                                            <Link to="/login" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Login</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                )
            }
        }, 100);
    },[]);
  return (
    <div>
        {nav}
    </div>
  );
}

export default Nav;