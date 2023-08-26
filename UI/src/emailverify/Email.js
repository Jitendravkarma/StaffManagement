import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {apiuserurl} from '../apiURL';
import axios from 'axios';
function Email() {
	const navigate = useNavigate();
	const [ out, setOut] = useState([]);
	const [ email, setEmail ] = useState('');
	const handleSubmit = ()=>{
		if (email === '') {
			setOut('Enter email id');
		}
		else{
			const setuser = {'email':email};
			axios.post(apiuserurl+'login',setuser).then((res)=>{
				const user = res.data.userDetails;
				localStorage.setItem('email',user.email);
				navigate('/forget-password');
			}).catch(()=>{
				setOut('Email not registered!');
			});
		}
	}
	return(
		<>
			<form className='my-4' style={{'maxWidth':'50%','margin':'auto'}}>
			  <h1>Enter Email Address</h1>
	          <span className="text-danger" style={{'textTransform':'capitalize','fontSize':'20px'}}>{out}</span>
	          <div className="form-outline mb-3">
	            <input type="email" id="form3Example4" className="form-control form-control-lg"
	              placeholder="Enter email address" value={email} onChange={e=>setEmail(e.target.value)}/>
	          </div>
	          <div className="text-center text-lg-start mt-4 pt-2">
	            <button type="button" className="btn btn-primary btn-lg"
	              style={{"paddingLeft": "2.5rem", "paddingRight": "2.5rem"}} onClick={handleSubmit}>Save</button>
	          </div>
	        </form>
		</>
	);
}
export default Email;