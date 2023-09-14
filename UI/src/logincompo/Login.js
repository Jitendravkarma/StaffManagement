import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { apiuserurl } from '../apiURL';

export default function Login() {
	const navigate = useNavigate();
	const [ out, setOut ] = useState('');
	const [ outt, setOutt ] = useState('');
	const [ em, setEm ] = useState();
	const [ ps, setPs ] = useState();
	const [ cp, setCp ] = useState();
	const [ email, setEmail] = useState('');
	const [ pass, setPass] = useState('');
	const [ captcha, setCaptcha ] = useState(`${String.fromCharCode((parseInt(Math.random() * 26) + 65))}${parseInt(Math.random()*65465.5465)}${String.fromCharCode((parseInt(Math.random() * 26) + 65))}`);
	const [ cap, setCap] = useState('');
	const refCap = ()=>{
		setCaptcha(`${String.fromCharCode((parseInt(Math.random() * 26) + 65))}${parseInt(Math.random()*65465.5465)}${String.fromCharCode((parseInt(Math.random() * 26) + 65))}`);
	}
	const handleSubmit = ()=>{
		if (email === '') {
			setEm('Email is required!');
		}
		if (pass === '') {
			setPs('Password is required!');
		}
		if (cap === '') {
			setCp('Please enter captcha!');
		}
		else if (cap !== captcha) {
			setCp('Invalid captcha!');
		}
		else {
			if (!localStorage.getItem("token")) {
				axios.get(`${apiuserurl}fetch?email=${email}`).then((res)=>{
					if (res.data[0].status===1) {
						const userDetails = {'email':email,'password':pass};
						axios.post(apiuserurl+'login', userDetails).then((res)=>{
							const checkuser = res.data.userDetails;
							if (checkuser.role==='admin') {
								navigate("/admin");
								localStorage.setItem('token',res.data.token);
								localStorage.setItem('id',checkuser._id);
								localStorage.setItem('name',checkuser.name);
								localStorage.setItem('email',checkuser.email);
								localStorage.setItem('mobile',checkuser.mobile);
								localStorage.setItem('gender',checkuser.gender);
								localStorage.setItem('info',checkuser.info);
								localStorage.setItem('address',checkuser.address);
								localStorage.setItem('role',checkuser.role);
								localStorage.setItem('status',checkuser.status);
							}
							else {
								navigate("/user");
								localStorage.setItem('token',res.data.token);
								localStorage.setItem('id',checkuser._id);
								localStorage.setItem('name',checkuser.name);
								localStorage.setItem('email',checkuser.email);
								localStorage.setItem('mobile',checkuser.mobile);
								localStorage.setItem('gender',checkuser.gender);
								localStorage.setItem('class',checkuser.class);
								localStorage.setItem('branch',checkuser.branch);
								localStorage.setItem('subject',checkuser.subject);
								localStorage.setItem('address',checkuser.address);
								localStorage.setItem('marital',checkuser.marital);
								localStorage.setItem('info',checkuser.info);
								localStorage.setItem('role',checkuser.role);
								localStorage.setItem('status',checkuser.status);
							}
							
						}).catch(()=>{
							setOut('Invalid user or Incorrect password!');
							setOutt('');
							setEmail('');
							setPass('');
						});
					}
					else {
						let check = prompt("Your account is not verified, enter your email to verify your account!");
						let update = {"condition_obj":{"email":email},"set_condition":{status:1}};
						if (check === res.data[0].email) {
							axios.patch(`${apiuserurl}update`, update).then(()=>{
								setOut("Account verified successfully try to login!");
							});
						}
						else {
							alert("Invalid email address");
						}
					}
				}).catch(()=>{
					setOut("Email is not registered!");
				});
			}
			else {
				setOut("Only one user can login at a time!");
				setTimeout(()=>{
					(localStorage.getItem("role")==="admin")?navigate("/admin"):navigate("/user");
				}, 1500);
			}
		}
	}
  return (
    <>
    	<div className="text-center section-title position-relative pb-3 my-5">
	        <h5 className="fw-bold text-primary text-uppercase">Login</h5>
	        <h1 className="mb-0">Login Here!</h1>
	    </div>
	    <section className="section">
		  <div className="container h-custom">
		    <div className="row d-flex justify-content-center align-items-center h-100">
		      <div className="col-md-9 col-lg-6 col-xl-5">
		        <img src="assets/img/login.png" className="img-fluid" alt="Sampleimage"/>
		      </div>
		      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
		        <form>
		        	<h3 className="text-danger text-center">{out}</h3>
		        	<h3 className="text-success text-center">{outt}</h3>
		          <div className="form-outline mb-4">
		            <label className="form-label" htmlFor="form3Example3">Email address</label>
		            <input type="email" id="form3Example3" className="form-control form-control-lg"
		              placeholder="Enter a valid email address" value={email} onChange={e=>setEmail(e.target.value)}/>
		            <span className="text-danger" style={{'fontWeight':'bold','fontSize':'18px'}}>{em}</span>
		          </div>

		          <div className="form-outline mb-3">
		            <label className="form-label" htmlFor="form3Example4">Password</label>
		            <input type="password" id="form3Example4" className="form-control form-control-lg"
		              placeholder="Enter password" value={pass} onChange={e=>setPass(e.target.value)}/>
		            <span className="text-danger" style={{'fontWeight':'bold','fontSize':'18px'}}>{ps}</span>
		          </div>

		          <div className="d-flex justify-content-between align-items-center">
		            <div className="form-check mb-0">
		              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
		              <label className="form-check-label" htmlFor="form2Example3">
		                Remember me
		              </label>
		            </div>
		            <Link className="text-body" to="/checkemail">Forgot password?</Link>
		          </div>

		          <div className="form-outline my-4">
		            <label className="form-label text-dark rounded bg-light p-2" htmlFor="form3Example3">{captcha}</label>&nbsp;&nbsp;
		            <span onClick={refCap}><i className="fa-solid fa-arrows-rotate"></i></span>
		            <input type="text" className="form-control form-control-lg"
		              placeholder="Enter Captcha" value={cap} onChange={e=>setCap(e.target.value)}/>
		              <span className="text-danger" style={{'fontWeight':'bold','fontSize':'18px'}}>{cp}</span>
		          </div>

		          <div className="text-center text-lg-start mt-4 pt-2">
		            <button type="button" className="btn btn-primary btn-lg"
		              style={{"paddingLeft": "2.5rem", "paddingRight": "2.5rem"}} onClick={handleSubmit}>Login</button>
		            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
		            <Link className="link-danger" to="/register">Register</Link>
		            </p>
		          </div>

		        </form>
		      </div>
		    </div>
		  </div>
		</section>
    </>
  );
}