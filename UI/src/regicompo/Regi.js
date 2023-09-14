import './Regi.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { apiuserurl } from '../apiURL';
import { useNavigate } from 'react-router-dom';
function Regi() {
    const navigate = useNavigate();
    const [out, setOut] = useState();
    const [name, setName] = useState('');
    const [namestyle, setNamestyle] = useState({
        'height':'40px',
    })
    const [nm, setNm] = useState('');
    const [email, setEmail] = useState('');
    const [em, setEm] = useState('');
    const [mobile, setMobile] = useState('');
    const [mb, setMb] = useState('');
    const [pass, setPass] = useState('');
    const [ps, setPs] = useState('');
    const [gen, setGen] = useState('');
    const [gn, setGn] = useState('');
    const [cls, setCls] = useState('');
    const [cl, setCl] = useState('');
    const [brn, setBrn] = useState('');
    const [br, setBr] = useState('');
    const [sub, setSub] = useState('');
    const [sb, setSb] = useState('');
    const [mry, setMry] = useState('');
    const [un, setUn] = useState('');
    const [spo, setSpo] = useState('');
    const [spnm, setSpnm] = useState('');
    const [city, setCity] = useState('');
    const [ct, setCt] = useState('');
    const [add, setAdd] = useState('');
    const [ad, setAd] = useState('');
    const [val1, setVal1] = useState(parseInt(Math.random()*10));
    const [val2, setVal2] = useState(parseInt(Math.random()*20));
    const [captcha, setCaptcha] = useState(val1+val2);
    const [cap, setCap] = useState('');
    const [cp, setCp] = useState('');
    useEffect(()=>{
        setCaptcha(val1+val2);
    })
    const refCap = ()=>{
        setVal1(parseInt(Math.random()*10));
        setVal2(parseInt(Math.random()*20));
    }
    const handleClick = ()=>{
    	if (name === '') {
    		setNm('Please enter your name!');
    	}
    	if (email === '') {
    		setEm('Please enter your email address!');
    	}
    	if (mobile === '') {
    		setMb('Please enter your mobile number!');
    	}
        else if (isNaN(mobile)) {
            setMb('Characters are not allowed in mobile number!');
        }
    	else if (mobile.length < 10 || mobile.length > 10) {
    		setMb('Mobile number should be 10 digit!');
    	}
    	if (pass === '') {
    		setPs('Please enter the password!');
    	}
    	else if (pass.length < 5 || pass.length > 10) {
    		setPs('Password must be enter between 4 to 10 character!');
    	}
        if (cls === '' || cls === '0') {
            setCl('Please select class!');
        }
        if (brn === '' && (cls === '11th' || cls === '12th')) {
            setBr('Please select branch!');
        }
        if (sub === '' || sub==='0') {
            setSb('Please select subject!');
        }
        if (mry === '' || mry === '0') {
            setUn('Please select marital status!');
        }
        if (spo === '' && mry === 'Married') {
            setSpnm("Please enter your Spouse name!");
        }
    	if (gen === '') {
    		setGn('Please select your gender!');
    	}
    	if (city === '' || city === '0') {
    		setCt('Please select your city!');
    	}
    	if (add === '') {
    		setAd('Please enter your address!');
    	}
        if (cap === '') {
            setCp('Please enter captcha!');
        }
        else if (captcha != cap) {
            setCp('Invalid captcha!');
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
                    setCap('');
                    setTimeout(()=>{
                        navigate('/login');
                    }, 1000);
                });
            })
    	}
    }
  return (
    <div className="container-fluid">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-4">
                    <div className="section-title position-relative pb-3 mb-5">
                        <h5 className="fw-bold text-primary text-uppercase">Register form</h5>
                        <h1 className="mb-0">Register Now!</h1>
                        <p>Teacher's registration only.</p>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="bg-primary rounded h-100 d-flex align-items-center p-5">
                        <form autoComplete="off">
                            <div className="row g-3">
                                <h3 className="text-center">Registration Form!</h3>
                                <span className="text-white font-weight-bold">{out}</span>
                                <div className="col-xl-6">
                                    <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control bg-light " placeholder="Your Name" style={namestyle} autoFocus />
                                    <span className="error">{nm}</span>
                                </div>
                                <div className="col-6">
                                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control bg-light border-0" placeholder="Your Email" style={namestyle}/>
                                    <span className="error">{em}</span>
                                </div>
                                <div className="col-6">
                                    <input type="text" value={mobile} onChange={e=>setMobile(e.target.value)} className="form-control bg-light border-0" placeholder="Your Mobile Number" style={namestyle} maxLength='10'/>
                                    <span className="error">{mb}</span>
                                </div>
                                <div className="col-6">
                                    <input type="password" value={pass} onChange={e=>setPass(e.target.value)} className="form-control bg-light border-0" placeholder="Your Password" style={namestyle}/>
                                    <span className="error">{ps}</span>
                                </div>
                                <div className="col-12" style={{"color":"white"}}>
                                    <label>Gender:- &nbsp;</label>
                                    <label htmlFor="male">Male</label>&nbsp;
                                    <input type="radio" value={"male"} onChange={e=>setGen(e.target.value)} name="gender" id="male"/>
                                    <label htmlFor="female">&nbsp;&nbsp;Female</label>&nbsp;
                                    <input type="radio" value={"female"} onChange={e=>setGen(e.target.value)} name="gender" id="female"/> &nbsp;
                                    <span className="error">{gn}</span>
                                </div>
                                <div className="col-6">
                                    <select className="form-select bg-light border-0" value={cls} onChange={e=>setCls(e.target.value)} style={namestyle}>
                                        <option value='0' defaultValue>Select Class</option>
                                        <option>9th</option>
                                        <option>10th</option>
                                        <option>11th</option>
                                        <option>12th</option>
                                    </select>
                                    <span className="error">{cl}</span>
                                </div>
                                {
                                    (cls==="11th" || cls==="12th") && 
                                    <div className="col-6">
                                        <select className="form-select bg-light border-0" value={brn} onChange={e=>setBrn(e.target.value)} style={namestyle}>
                                            <option value='0' defaultValue>Select Branch</option>
                                            <option>Maths</option>
                                            <option>Biology</option>
                                            <option>Commerce</option>
                                            <option>Arts</option>
                                            <option>Agriculture</option>
                                        </select>
                                        <span className="error">{br}</span>
                                    </div>
                                }
                                <div className="col-6">
                                    <select className="form-select bg-light border-0" value={sub} onChange={e=>setSub(e.target.value)} style={namestyle}>
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
                                    <span className="error">{sb}</span>
                                </div>
                                <div className="col-6">
                                    <select className="form-select bg-light border-0" value={mry} onChange={e=>setMry(e.target.value)} style={namestyle}>
                                        <option value='0' defaultValue>Marital Status</option>
                                        <option>Unmarried</option>
                                        <option>Married</option>
                                    </select>
                                    <span className="error">{un}</span>
                                </div>
                                {
                                    mry ==="Married" &&
                                    <div className="col-6">
                                        <input type="text" value={spo} onChange={e=>setSpo(e.target.value)} className="form-control bg-light border-0" placeholder="Spouse name" style={namestyle}/>
                                        <span className="error">{spnm}</span>
                                    </div>
                                }
                                <div className="col-6">
                                    <select className="form-select bg-light border-0" value={city} onChange={e=>setCity(e.target.value)} style={namestyle}>
                                        <option value='0' defaultValue>Select City</option>
                                        <option>Indore</option>
                                        <option>Dewas</option>
                                        <option>Ujjain</option>
                                        <option>Bhopal</option>
                                    </select>
                                    <span className="error">{ct}</span>
                                </div>
                                <div className="col-12">
                                    <input className="form-control bg-light border-0" value={add} placeholder="Your Address" onChange={e=>setAdd(e.target.value)} style={namestyle}/>
                                    <span className="error">{ad}</span>
                                </div>
                                <div className="col-3">
                                    <label className="text-white p-2" style={{"backgroundColor":"#AD2E2E"}}>{val1} + {val2} = ?</label>
                                    <span onClick={refCap}><i className="mx-2 fa-solid text-white fa-arrows-rotate"></i></span>
                                </div>
                                <div className="col-12">
                                    <input type="text" value={cap} onChange={e=>setCap(e.target.value)} className="form-control bg-light border-0" placeholder="Enter Captch" style={namestyle}/>
                                    <span className="error">{cp}</span>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-dark w-100 py-2" type="button" onClick={handleClick}>Submit</button>
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