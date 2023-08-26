import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {apiuserurl} from '../apiURL';
import axios from 'axios';
function Forget() {
	const navigate = useNavigate();
	const [ out, setOut] = useState([]);
	const [npass, setNpass] = useState(null);
	const [cpass, setCpass] = useState(null);
	const handleSubmit = ()=>{
		if (npass === null) {
			setOut('Enter new password!');
		}
		else if (cpass === null) {
			setOut('Enter confirm password!');
		}
		else if (npass !== cpass) {
			setOut('New & confirm new password not matched');
		}
		else{
			const getdetails = {'email':localStorage.getItem('email'),'password':npass};
			axios.post(apiuserurl+'login',getdetails).then((res)=>{
				setOut('Your new password is matched with your old password');
			}).catch(()=>{
				const updatepass = {'condition_obj':{'email':localStorage.getItem('email')},'set_condition':{'password':npass}};
				axios.patch(apiuserurl+'update',updatepass).then((res)=>{
					setOut('Password change successfully!');
					setTimeout(()=>{
						navigate('/logout');
					}, 1500);
					setNpass('');
					setCpass('');
				});
			});
		}
	}
	return(
		<>
			<form className='my-4' style={{'maxWidth':'50%','margin':'auto'}}>
				<h1>Set New Password</h1>
	          <span className="text-danger" style={{'textTransform':'capitalize','fontSize':'20px'}}>{out}</span>
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