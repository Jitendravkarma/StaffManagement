import './Regi.css';
import axios from 'axios';
import { useState } from 'react';
import { apiuserurl } from '../apiURL';
import { useNavigate } from 'react-router-dom';
function Regi() {
    const navigate = useNavigate();
    const [out, setOut] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [pass, setPass] = useState('');
    const [gen, setGen] = useState('');
    const [cls, setCls] = useState('');
    const [brn, setBrn] = useState('');
    const [sub, setSub] = useState('');
    const [mry, setMry] = useState('');
    const [spo, setSpo] = useState('');
    const [city, setCity] = useState('');
    const [add, setAdd] = useState('');
    const handleClick = ()=>{
    	if (name === '') {
    		setOut('Please enter your name!');
    	}
    	else if (email === '') {
    		setOut('Please enter your email address!');
    	}
    	else if (mobile === '') {
    		setOut('Please enter your mobile number!');
    	}
        else if (isNaN(mobile)) {
            setOut('Characters are not allowed in mobile number!');
        }
    	else if (mobile.length < 10 || mobile.length > 10) {
    		setOut('Mobile number should be 10 digit!');
    	}
    	else if (pass === '') {
    		setOut('Please enter the password!');
    	}
    	else if (pass.length < 5 || pass.length > 10) {
    		setOut('Password must be enter between 4 to 10 character!');
    	}
        else if (cls === '' || cls === '0') {
            setOut('Please select class!');
        }
        else if (brn === '' && (cls === '11th' || cls === '12th')) {
            setOut('Please select branch!');
        }
        else if (sub === '' || sub==='0') {
            setOut('Please select subject!');
        }
        else if (mry === '' || mry === '0') {
            setOut('Please select marital status!');
        }
        else if (spo === '' && mry === 'Married') {
            setOut("Please enter your Spouse name!");
        }
    	else if (gen === '') {
    		setOut('Please select your gender!');
    	}
    	else if (city === '' || city === '0') {
    		setOut('Please select your city!');
    	}
    	else if (add === '') {
    		setOut('Please enter your address!');
    	}
    	else {
            axios.get(`${apiuserurl}fetch?email=${email}`).then((res)=>{
                if (res.data[0].email === email) {
                    setOut("Email is already registered!");
                }
                else if (res.data[0].mobile== mobile) {
                    setOut("Mobile is already registered!");
                }
            }).catch(()=>{
                const userDetails = {'name':name,'email':email,'mobile':mobile,'password':pass,'gender':gen,'class':cls,'branch':brn,'subject':sub,'marital':mry,'spouse':spo,'city':city,'address':add};
                axios.post(apiuserurl+'save', userDetails).then(()=>{
                    setOut('User register successfully!');
                    setName('');
                    setEmail('');
                    setMobile('');
                    setPass('');
                    setGen('');
                    setCls('');
                    setBrn('');
                    setSub('');
                    setMry('');
                    setSpo('');
                    setCity('');
                    setAdd('');
                    setTimeout(()=>{
                        navigate('/login');
                    }, 1000);
                });
            })
    	}
    }
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-4">
                    <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="fw-bold text-primary text-uppercase">Register form</h5>
                        <h1 className="mb-0">Register Now!</h1>
                    </div>
                    <p className="mb-4">Teacher's registration only.</p>
                </div>
                <div className="col-lg-8">
                    <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                        <form autoComplete="off">
                            <div className="row g-3">
                                <h3 className="text-center">Registration Form!</h3>
                                <span className="text-white font-weight-bold">{out}</span>
                                <div className="col-xl-6">
                                    <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control bg-light border-0" placeholder="Your Name" style={{"height": "55px"}} autoFocus/>
                                </div>
                                <div className="col-6">
                                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control bg-light border-0" placeholder="Your Email" style={{"height": "55px"}}/>
                                </div>
                                <div className="col-6">
                                    <input type="text" value={mobile} onChange={e=>setMobile(e.target.value)} className="form-control bg-light border-0" placeholder="Your Mobile Number" style={{"height": "55px"}} maxLength='10'/>
                                </div>
                                <div className="col-6">
                                    <input type="password" value={pass} onChange={e=>setPass(e.target.value)} className="form-control bg-light border-0" placeholder="Your Password" style={{"height": "55px"}}/>
                                </div>
                                <div className="col-12" style={{"color":"white"}}>
                                    <label>Gender:- &nbsp;</label>
                                    <label htmlFor="male">Male</label>&nbsp;
                                    <input type="radio" value={"male"} onChange={e=>setGen(e.target.value)} name="gender" id="male"/>
                                    <label htmlFor="female">&nbsp;&nbsp;Female</label>&nbsp;
                                    <input type="radio" value={"female"} onChange={e=>setGen(e.target.value)} name="gender" id="female"/>
                                </div>
                                <div className="col-6">
                                    <select className="form-select bg-light border-0" value={cls} onChange={e=>setCls(e.target.value)} style={{"height": "55px"}}>
                                        <option value='0' defaultValue>Select Class</option>
                                        <option>9th</option>
                                        <option>10th</option>
                                        <option>11th</option>
                                        <option>12th</option>
                                    </select>
                                </div>
                                {
                                    (cls==="11th" || cls==="12th") && 
                                    <div className="col-6">
                                        <select className="form-select bg-light border-0" value={brn} onChange={e=>setBrn(e.target.value)} style={{"height": "55px"}}>
                                            <option value='0' defaultValue>Select Branch</option>
                                            <option>Maths</option>
                                            <option>Biology</option>
                                            <option>Commerce</option>
                                            <option>Arts</option>
                                            <option>Agriculture</option>
                                        </select>
                                    </div>
                                }
                                <div className="col-6">
                                    <select className="form-select bg-light border-0" value={sub} onChange={e=>setSub(e.target.value)} style={{"height": "55px"}}>
                                        <option value='0' defaultValue>Select Subject</option>
                                        {
                                            (cls==="9th" || cls==="10th") &&
                                            <>
                                                <option>Hindi</option>
                                                <option>English</option>
                                                <option>Maths</option>
                                                <option>Science</option>
                                                <option>Social Science</option>
                                                <option>Sanskrit</option>
                                            </>
                                        }
                                        {
                                            (cls==="11th" || cls==="12th") && brn==="Maths" &&
                                            <>
                                                <option>Hindi</option>
                                                <option>English</option>
                                                <option>Maths</option>
                                                <option>Physics</option>
                                                <option>Chemistry</option>
                                            </>
                                        }
                                        {
                                            (cls==="11th" || cls==="12th") && brn==="Biology" &&
                                            <>
                                                <option>Hindi</option>
                                                <option>English</option>
                                                <option>Biology</option>
                                                <option>Physics</option>
                                                <option>Chemistry</option>
                                            </>
                                        }
                                        {
                                            (cls==="11th" || cls==="12th") && brn==="Commerce" &&
                                            <>
                                                <option>Hindi</option>
                                                <option>English</option>
                                                <option>Account</option>
                                                <option>Business Study</option>
                                                <option>Economics</option>
                                            </>
                                        }
                                        {
                                            (cls==="11th" || cls==="12th") && brn==="Arts" &&
                                            <>
                                                <option>Hindi</option>
                                                <option>English</option>
                                                <option>History</option>
                                                <option>Economics</option>
                                                <option>Political</option>
                                            </>
                                        }
                                        {
                                            (cls==="11th" || cls==="12th") && brn==="Agriculture" &&
                                            <>
                                                <option>Hindi</option>
                                                <option>English</option>
                                                <option>Farming</option>
                                                <option>Maths</option>
                                                <option>Dont Know</option>
                                            </>
                                        }
                                    </select>
                                </div>
                                <div className="col-6">
                                    <select className="form-select bg-light border-0" value={mry} onChange={e=>setMry(e.target.value)} style={{"height": "55px"}}>
                                        <option value='0' defaultValue>Marital Status</option>
                                        <option>Unmarried</option>
                                        <option>Married</option>
                                    </select>
                                </div>
                                {
                                    mry ==="Married" &&
                                    <div className="col-6">
                                        <input type="text" value={spo} onChange={e=>setSpo(e.target.value)} className="form-control bg-light border-0" placeholder="Spouse name" style={{"height": "55px"}}/>
                                    </div>
                                }
                                <div className="col-6">
                                    <select className="form-select bg-light border-0" value={city} onChange={e=>setCity(e.target.value)} style={{"height": "55px"}}>
                                        <option value='0' defaultValue>Select City</option>
                                        <option>Indore</option>
                                        <option>Dewas</option>
                                        <option>Ujjain</option>
                                        <option>Bhopal</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control bg-light border-0" value={add} rows="2" placeholder="Your Address" onChange={e=>setAdd(e.target.value)}></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-dark w-100 py-3" type="button" onClick={handleClick}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Regi;