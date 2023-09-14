import './cpro.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { apiuserurl } from '../apiURL';
function Cpro() {
	const [ output , setOutput ] = useState();
	const [ name , setName ] = useState();
	const [ mobile , setMobile ] = useState();
	const [ address , setAddress ] = useState();
	const [ city , setCity ] = useState();
	const [ gender , setGender ] = useState();
  const [ mry, setMry ] = useState('');
  const [ spo, setSpo ] = useState('');
	const [ userDetails , setUserDetails ] = useState([]);
  useEffect(()=>{
      axios.get(apiuserurl+"fetch?email="+localStorage.getItem("email")).then((response)=>{
        setUserDetails(response.data[0]);    
        setName(userDetails.name);
        setMobile(userDetails.mobile);
        setAddress(userDetails.address);
        setCity(userDetails.city);
      });    
  },[]);
	const handleSubmit=()=>{
		const updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"set_condition":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender,"marital":mry,"spouse":spo}};
		axios.patch(apiuserurl+"update",updateDetails).then((response)=>{
		    setOutput("Profile edited successfully....");
		}).catch((err)=>{
		    console.log(err);
		});
	} 
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="container">
          <h2 className="w-50 m-auto mb-3">Edit Profile Here!!! </h2>
          <span style={{"color":"blue"}} >{output}</span>
          <form className="w-50 m-auto my-2">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" value={name} onChange={ e => setName(e.target.value) } />
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="mobile">Mobile:</label>
              <input type="text" className="form-control" value={mobile} onChange={ e => setMobile(e.target.value) } />
            </div>
            <br/>  
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <textarea className="form-control" value={address} onChange={ e => setAddress(e.target.value) } ></textarea>
            </div>
            <br/>
            <div className="form-group">
                <label htmlFor="address">Marital Status:</label>
                <select className="form-select" value={mry} onChange={e=>setMry(e.target.value)} style={{"height": "55px"}}>
                    <option value='0' defaultValue>Marital Status</option>
                    <option>Unmarried</option>
                    <option>Married</option>
                </select>
            </div>
            {
                mry ==="Married" &&
                <div className="form-group my-2">
                    <label htmlFor="address">Spouse Name:</label>
                    <input type="text" value={spo} onChange={e=>setSpo(e.target.value)} className="form-control" placeholder="Spouse name" style={{"height": "55px"}}/>
                </div>
            }
            <br/>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <select className="form-control" value={city} onChange={ e => setCity(e.target.value) } >
              <option>Select City</option>
              <option>Indore</option>
              <option>Bhopal</option>
              <option>Ujjain</option>
              </select>
            </div>
            <br/>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              &nbsp;&nbsp;
              <input type="radio" checked name="gender" value="male" onChange={ e => setGender(e.target.value) } />
              &nbsp;Male
              &nbsp;&nbsp;
              <input type="radio" name="gender" value="female" onChange={ e => setGender(e.target.value) } />
              &nbsp;Female
            </div>

            <br/>  
            <button type="button" className="btn btn-primary w-100" style={{"paddingLeft": "2.5rem", "paddingRight": "2.5rem"}} 
            onClick={handleSubmit}>Save</button>
          </form>
          <br/>
        </div>
    </div>
  </>
  );
}

export default Cpro;