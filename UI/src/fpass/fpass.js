import './fpass';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiuserurl } from '../apiURL';
import axios from 'axios';
function Forget() {
	const navigate = useNavigate();
	const [ out, setOut] = useState([]);
	const [ gmail, setGmail] = useState();
	const [ email, setEmail ] = useState('');
	const [ npass, setNpass] = useState('');
	const [ cpass, setCpass] = useState('');
	const handleSubmit = ()=>{
		if (email === '') {
			setOut('Enter your email address');
		}
		else if (npass === '') {
			setOut('Enter new password!');
		}
		else if (cpass === '') {
			setOut('Enter confirm password');
		}
		else if (npass !== cpass) {
			setOut('New & confirm password not matched!');
		}
		else {
			const userDetails = {'email':email, 'password':npass};
			axios.get(apiuserurl+'fetch?email='+email+'&password='+npass).then((res)=>{
				setOut('Your new password is matched from old password!');
			}).catch(()=>{
				const updatepass = {'condition_obj':{'email':email},'set_condition':{'password':npass}};
				axios.patch(apiuserurl+'update',updatepass).then((res)=>{
					setOut('Password change successfully!');
					setEmail('');
					setNpass('');
					setCpass('');
					setTimeout(()=>{
						navigate('/login');
					}, 1500);
				}).catch(()=>{
					setOut('Invalid email id or not registered user!');
					setEmail('');
					setNpass('');
					setCpass('');
				});	
			});
		}
	}
	return(
		<>
			<form className='my-4' style={{'maxWidth':'50%','margin':'auto'}}>
			  <h1>Forget Password</h1>
	          <span className="text-danger" style={{'textTransform':'capitalize','fontSize':'20px'}}>{out}</span>
	          <div className="form-outline mb-3">
	            <input type="email" id="form3Example4" className="form-control form-control-lg"
	              placeholder="Enter email address" value={email} onChange={e=>setEmail(e.target.value)}/>
	          </div>
	          <div className="form-outline mb-3">
	            <input type="password" id="form3Example4" className="form-control form-control-lg"
	              placeholder="Enter new password" value={npass} onChange={e=>setNpass(e.target.value)}/>
	          </div>
	          <div className="form-outline mb-3">
	            <input type="password" id="form3Example4" className="form-control form-control-lg"
	              placeholder="Enter confirm new password" value={cpass} onChange={e=>setCpass(e.target.value)}/>
	          </div>
	          <div className="text-center text-lg-start mt-4 pt-2">
	            <button type="button" className="btn btn-primary btn-lg"
	              style={{"paddingLeft": "2.5rem", "paddingRight": "2.5rem"}} onClick={handleSubmit}>Save</button>
	          </div>
	        </form>

		</>
	);
}
export default Forget;