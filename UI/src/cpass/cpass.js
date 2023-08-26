import './cpass.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { apiuserurl } from '../apiURL';
function Cpass() {
	const navigate = useNavigate();
	const [out, setOut] = useState();
	const [opass, setOpass] = useState('');
	const [npass, setNpass] = useState('');
	const [cpass, setCpass] = useState('');
	const handleSubmit =()=>{
		if (opass === '') {
			setOut('Enter current password!');
		}
		else if (npass === '') {
			setOut('Enter new password!');
		}
		else if (cpass === '') {
			setOut('Enter confirm password!');
		}
		else {
			axios.get(apiuserurl+"fetch?email="+localStorage.getItem("email")+"&password="+opass).then((response)=>{
		     if (npass === opass) {
		     	setOut('Current and New password never be same!');
		     }
		     else if(npass===cpass)
		     {
		        let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"set_condition":{"password":cpass}};
		        axios.patch(apiuserurl+"update",updateDetails).then((response)=>{
		            setOut("Password changes successfully....");
		            setOpass("");
		            setNpass("");
		            setCpass("");
		            setTimeout(()=>{
		            	navigate('/logout');
		            }, 1500);
		        }).catch((err)=>{
		            console.log(err);
		        });
		     } 
		     else
		     {
		      	setOut("New & Confirm new password mismatch");
		     }
		    }).catch((error)=>{
		        setOut("Invalid old password");
		    });
		}
	}
  return (
    <div className ="contain">
        <h1>Change Password</h1>
        <form className='mt-4' style={{'maxWidth':'50%','margin':'auto'}}>
        	<span className="text-danger" style={{'textTransform':'capitalize','fontSize':'20px'}}>{out}</span>
          <div className="form-outline mb-3">
            <input type="password" className="form-control form-control-lg"
              placeholder="Enter current password" value={opass} onChange={e=>setOpass(e.target.value)}/>
          </div>
          <div className="form-outline mb-3">
            <input type="password" className="form-control form-control-lg"
              placeholder="Enter new password" value={npass} onChange={e=>setNpass(e.target.value)}/>
          </div>
          <div className="form-outline mb-3">
            <input type="password" className="form-control form-control-lg"
              placeholder="Enter confirm new password" value={cpass} onChange={e=>setCpass(e.target.value)}/>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg"
              style={{"paddingLeft": "2.5rem", "paddingRight": "2.5rem"}} onClick={handleSubmit}>Save</button>
          </div>
        </form>
    </div>
  );
}

export default Cpass;