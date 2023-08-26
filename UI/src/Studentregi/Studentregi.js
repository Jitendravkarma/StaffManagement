import './Studentregi.css';
import axios from 'axios';
import { useState } from 'react';
import { apistudenturl } from '../apiURL';
import { useNavigate } from 'react-router-dom';
export default function Student() {
	const navigate = useNavigate();
    const [out, setOut] = useState();
    const [roll, setRoll] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [gen, setGen] = useState('');
    const [cls, setCls] = useState('');
    const [brn, setBrn] = useState('');
    //-------subjects----------------
    const [hindi, setHindi] = useState('');
    const [english, setEnglish] = useState('');
    const [math, setMath] = useState('');
    const [bio, setBio] = useState('');
    const [che, setChe] = useState('');
    const [phy, setPhy] = useState('');
    const [social, setSocial] = useState('');
    const [sanskrit, setSanskrit] = useState('');
    const [science, setScience] = useState('');
    const [account, setAccount] = useState('');
    const [business, setBusiness] = useState('');
    const [economic, setEconomic] = useState('');
    const [political, setPolitical] = useState('');
    const [history, setHistory] = useState('');
    const [farm, setFarm] = useState('');
    //--------end subject--------------
    const [add, setAdd] = useState('');
    const handleClick = ()=>{
    	if (roll === '') {
    		setOut("Please enter roll number");
    	}
    	else if (name === '') {
    		setOut('Please enter student name!');
    	}
    	else if (mobile === '') {
    		setOut('Please enter student mobile number!');
    	}
    	else if (mobile.length < 10 || mobile.length > 10) {
    		setOut('Mobile number should be 10 digit!');
    	}
        else if (cls === '' || cls === '0') {
            setOut('Please select class!');
        }
        else if (brn === '' && (cls === '11th' || cls === '12th')) {
            setOut('Please select branch!');
        }
    	else if (gen === '') {
    		setOut('Please select student gender!');
    	}
    	else if (add === '') {
    		setOut('Please enter student address!');
    	}
    	else {
    		let studentDetails={};
            if (localStorage.getItem("class")==="9th" || localStorage.getItem("class")==="10th") {
            	studentDetails = {'roll':roll,'name':name,'mobile':mobile,'gender':gen,'class':cls,'branch':brn,'hindi':hindi,'english':english,'maths':math,'social':social,'science':science,'sanskrit':sanskrit,'address':add};
            }
            else if ((localStorage.getItem("class")==="11th" || localStorage.getItem("class")==="12th") && localStorage.getItem("branch")==="Maths") {
            	studentDetails = {'roll':roll,'name':name,'mobile':mobile,'gender':gen,'class':cls,'branch':brn,'hindi':hindi,'english':english,'maths':math,'physics':phy,'chemistry':che,'address':add};
            }
            else if ((localStorage.getItem("class")==="11th" || localStorage.getItem("class")==="12th") && localStorage.getItem("branch")==="Biology") {
            	studentDetails = {'roll':roll,'name':name,'mobile':mobile,'gender':gen,'class':cls,'branch':brn,'hindi':hindi,'english':english,'biology':bio,'physics':phy,'chemistry':che,'address':add};
            }
            else if ((localStorage.getItem("class")==="11th" || localStorage.getItem("class")==="12th") && localStorage.getItem("branch")==="Commerce") {
            	studentDetails = {'roll':roll,'name':name,'mobile':mobile,'gender':gen,'class':cls,'branch':brn,'hindi':hindi,'english':english,'account':account,'business':business,'economics':economic,'address':add};
            }
            else if ((localStorage.getItem("class")==="11th" || localStorage.getItem("class")==="12th") && localStorage.getItem("branch")==="Arts") {
            	studentDetails = {'roll':roll,'name':name,'mobile':mobile,'gender':gen,'class':cls,'branch':brn,'hindi':hindi,'english':english,'history':history,'political':political,'economics':economic,'address':add};
            }
            axios.post(apistudenturl+'save', studentDetails).then(()=>{
                setOut('Student record registered!');
                setRoll('');
                setName('');
                setMobile('');
                setGen('');
                setCls('');
                setBrn('');
                setAdd('');
                setTimeout(()=>{
                    navigate('/managestudents');
                }, 1000);
            });
    	}
    }
	return (
		<>
			<div className="container">
				<div className="col-lg-8 mt-5 mb-5 m-auto">
	                <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
	                    <form autoComplete="off">
	                        <div className="row g-3">
	                            <h3 className="text-center">Student Registration Form!</h3>
	                            <span className="text-white font-weight-bold">{out}</span>
	                            <div className="col-xl-6">
	                                <input type="text" value={roll} onChange={e=>setRoll(e.target.value)} className="form-control bg-light border-0" placeholder="Roll Number" style={{"height": "55px"}}/>
	                            </div>
	                            <div className="col-xl-6">
	                                <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control bg-light border-0" placeholder="Student Name" style={{"height": "55px"}}/>
	                            </div>
	                            <div className="col-6">
	                                <input type="text" value={mobile} onChange={e=>setMobile(e.target.value)} className="form-control bg-light border-0" placeholder="Student Mobile Number" style={{"height": "55px"}} maxLength='10'/>
	                            </div>
	                            <div className="col-6" style={{"color":"white","lineHeight":"50px"}}>
	                                <label>Gender:- &nbsp;</label>
	                                <label htmlFor="male">Male</label>&nbsp;
	                                <input type="radio" value={"male"} onChange={e=>setGen(e.target.value)} name="gender" id="male"/>
	                                <label htmlFor="female">&nbsp;&nbsp;Female</label>&nbsp;
	                                <input type="radio" value={"female"} onChange={e=>setGen(e.target.value)} name="gender" id="female"/>
	                            </div>
	                            <div className="col-12">
	                                <select className="form-select bg-light border-0" value={cls} onChange={e=>setCls(e.target.value)} style={{"height": "55px"}}>
	                                    <option value='0' defaultValue>Select Class</option>
	                                    <option>{localStorage.getItem("class")}</option>
	                                </select>
	                            </div>
	                            {
	                                (cls==="11th" || cls==="12th") && 
	                                <div className="col-12">
	                                    <select className="form-select bg-light border-0" value={brn} onChange={e=>setBrn(e.target.value)} style={{"height": "55px"}}>
	                                        <option value='0' defaultValue>Select Branch</option>
	                                        <option>{localStorage.getItem("branch")}</option>
	                                    </select>
	                                </div>
	                            }
                                <h3 align="center">Student Marks</h3>
                                {
                                    (cls==="9th" || cls==="10th") &&
                                    <>
                                      <div className="col-xl-6">
		                                <input type="text" value={hindi} onChange={e=>setHindi(e.target.value)} className="form-control bg-light border-0" placeholder="Hindi" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={english} onChange={e=>setEnglish(e.target.value)} className="form-control bg-light border-0" placeholder="English" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={math} onChange={e=>setMath(e.target.value)} className="form-control bg-light border-0" placeholder="Math" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={social} onChange={e=>setSocial(e.target.value)} className="form-control bg-light border-0" placeholder="Social Science" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={science} onChange={e=>setScience(e.target.value)} className="form-control bg-light border-0" placeholder="Science" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={sanskrit} onChange={e=>setSanskrit(e.target.value)} className="form-control bg-light border-0" placeholder="Sanskrit" style={{"height": "55px"}}/>
		                              </div>
                                    </>
                                }
                                {
                                    (cls==="11th" || cls==="12th") && brn==="Maths" &&
                                    <>
                                      <div className="col-xl-6">
		                                <input type="text" value={hindi} onChange={e=>setHindi(e.target.value)} className="form-control bg-light border-0" placeholder="Hindi" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={english} onChange={e=>setEnglish(e.target.value)} className="form-control bg-light border-0" placeholder="English" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={math} onChange={e=>setMath(e.target.value)} className="form-control bg-light border-0" placeholder="Math" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={phy} onChange={e=>setPhy(e.target.value)} className="form-control bg-light border-0" placeholder="Physics" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-12">
		                                <input type="text" value={che} onChange={e=>setChe(e.target.value)} className="form-control bg-light border-0" placeholder="Chemistry" style={{"height": "55px"}}/>
		                              </div>
                                    </>
                                }
                                {
                                    (cls==="11th" || cls==="12th") && brn==="Biology" &&
                                    <>
                                      <div className="col-xl-6">
		                                <input type="text" value={hindi} onChange={e=>setHindi(e.target.value)} className="form-control bg-light border-0" placeholder="Hindi" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={english} onChange={e=>setEnglish(e.target.value)} className="form-control bg-light border-0" placeholder="English" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={bio} onChange={e=>setBio(e.target.value)} className="form-control bg-light border-0" placeholder="Biology" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={phy} onChange={e=>setPhy(e.target.value)} className="form-control bg-light border-0" placeholder="Physics" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-12">
		                                <input type="text" value={che} onChange={e=>setChe(e.target.value)} className="form-control bg-light border-0" placeholder="Chemistry" style={{"height": "55px"}}/>
		                              </div>
                                    </>
                                }
                                {
                                    (cls==="11th" || cls==="12th") && brn==="Commerce" &&
                                    <>
                                      <div className="col-xl-6">
		                                <input type="text" value={hindi} onChange={e=>setHindi(e.target.value)} className="form-control bg-light border-0" placeholder="Hindi" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={english} onChange={e=>setEnglish(e.target.value)} className="form-control bg-light border-0" placeholder="English" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={account} onChange={e=>setAccount(e.target.value)} className="form-control bg-light border-0" placeholder="Account" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={business} onChange={e=>setBusiness(e.target.value)} className="form-control bg-light border-0" placeholder="Business Study" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-12">
		                                <input type="text" value={economic} onChange={e=>setEconomic(e.target.value)} className="form-control bg-light border-0" placeholder="Economics" style={{"height": "55px"}}/>
		                              </div>
                                    </>
                                }
                                {
                                    (cls==="11th" || cls==="12th") && brn==="Arts" &&
                                    <>
                                      <div className="col-xl-6">
		                                <input type="text" value={hindi} onChange={e=>setHindi(e.target.value)} className="form-control bg-light border-0" placeholder="Hindi" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={english} onChange={e=>setEnglish(e.target.value)} className="form-control bg-light border-0" placeholder="English" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={political} onChange={e=>setPolitical(e.target.value)} className="form-control bg-light border-0" placeholder="Political Science" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={history} onChange={e=>setHistory(e.target.value)} className="form-control bg-light border-0" placeholder="History" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-12">
		                                <input type="text" value={economic} onChange={e=>setEconomic(e.target.value)} className="form-control bg-light border-0" placeholder="Economics" style={{"height": "55px"}}/>
		                              </div>
                                    </>
                                }
                                {
                                    (cls==="11th" || cls==="12th") && brn==="Agriculture" &&
                                    <>
                                      <div className="col-xl-6">
		                                <input type="text" value={hindi} onChange={e=>setHindi(e.target.value)} className="form-control bg-light border-0" placeholder="Hindi" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={english} onChange={e=>setEnglish(e.target.value)} className="form-control bg-light border-0" placeholder="English" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={math} onChange={e=>setMath(e.target.value)} className="form-control bg-light border-0" placeholder="Math" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-6">
		                                <input type="text" value={farm} onChange={e=>setFarm(e.target.value)} className="form-control bg-light border-0" placeholder="Farmer" style={{"height": "55px"}}/>
		                              </div>
		                              <div className="col-xl-12">
		                                <input type="text" value={science} onChange={e=>setScience(e.target.value)} className="form-control bg-light border-0" placeholder="Science" style={{"height": "55px"}}/>
		                              </div>
                                    </>
                                }
	                            <div className="col-12">
	                                <textarea className="form-control bg-light border-0" value={add} rows="2" placeholder="Student Address" onChange={e=>setAdd(e.target.value)}></textarea>
	                            </div>
	                            <div className="col-12">
	                                <button className="btn btn-dark w-100 py-3" type="button" onClick={handleClick}>Submit</button>
	                            </div>
	                        </div>
	                    </form>
	                </div>
            	</div>
			</div>
		</>
	);
}