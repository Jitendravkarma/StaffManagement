import './Result.css';
import { useState } from 'react';
import axios from 'axios';
import { apistudenturl } from '../apiURL';
export default function User() {
	const [student, setStudent] = useState([]);
	const [out, setOut] = useState();
	const [name, setName] = useState('');
	const [roll, setRoll] = useState('');
	const [sroll, setSroll] = useState('');
	const [hindi, setHindi] = useState('');
	const [english, setEnglish] = useState('');
	const [maths, setMaths] = useState('');
	const [social, setSocial] = useState('');
	const [science, setScience] = useState('');
	const [sanskrit, setSanskrit] = useState('');
	const handleSubmit = ()=>{
		if (roll === '') {
			setOut(`Enter roll number!`);
		}
		else {
			axios.get(apistudenturl+'fetch?roll='+roll).then((res)=>{
				setStudent(res.data[0]);
				setOut("");
			}).catch(()=>{
				setOut(`${roll} roll number is invalid!`);
				setRoll('');
			});
		}
	}
	return (
		<div className="contain">
			<h1>Search Your Examination Result</h1>
			<form className='mt-4' style={{'maxWidth':'50%','margin':'auto'}}>
	          <span className="text-danger" style={{'textTransform':'capitalize','fontSize':'20px'}}>{out}</span>
	          <div className="form-outline mb-3">
	            <input type="text" className="form-control form-control-lg"
	              placeholder="Enter student roll number" value={roll} onChange={e=>setRoll(e.target.value)}/>
	          </div>
	          <div className="text-center text-lg-start mt-4 pt-2">
	            <button type="button" className="btn btn-primary btn-lg"
	              style={{"paddingLeft": "2.5rem", "paddingRight": "2.5rem"}} onClick={handleSubmit}>Search</button>
	          </div>
	        </form>
	        <table cellPadding="5" border="2" align="center" className="table-bordered my-5">
					<thead>
						<tr>
							<th rowSpan="2">Student Roll</th>
							<th rowSpan="2">Student Name</th>
							<th rowSpan="2">Student Mobile</th>
							<th rowSpan="2">Student Gender</th>
							<th rowSpan="2">Student Class</th>
							
							{
								(student.class === "9th" || student.class === "9th") &&
								<th colSpan="6">Marks</th>
							}
							{
								(student.class === "11th" || student.class === "12th") &&
								<>
									<th rowSpan="2">Student Branch</th>
									<th colSpan="5">Marks</th>
								</>
							}
							<th rowSpan="2">Address</th>
						</tr>
						
						{
							(student.class==="9th" || student.class==="10th") &&
							<tr>
								<th>Hindi</th>
								<th>English</th>
								<th>Maths</th>
								<th>Social Science</th>
								<th>Science</th>
								<th>Sanskrit</th>
							</tr>
						}
						{
							((student.class==="11th" || student.class==="12th") && (student.branch=="Maths")) &&
							<tr>
								<th>Hindi</th>
								<th>English</th>
								<th>Maths</th>
								<th>Physics</th>
								<th>Chemistry</th>
							</tr>
						}
						{
							((student.class==="11th" || student.class==="12th") && (student.branch=="Biology")) &&
							<tr>
								<th>Hindi</th>
								<th>English</th>
								<th>Biology</th>
								<th>Physics</th>
								<th>Chemistry</th>
							</tr>
						}
						{
							((student.class==="11th" || student.class==="12th") && (student.branch=="Commerce")) &&
							<tr>
								<th>Hindi</th>
								<th>English</th>
								<th>Account</th>
								<th>Business</th>
								<th>Economics</th>
							</tr>
						}
						{
							((student.class==="11th" || student.class==="12th") && (student.branch=="Arts")) &&
							<tr>
								<th>Hindi</th>
								<th>English</th>
								<th>History</th>
								<th>Political</th>
								<th>Economics</th>
							</tr>
						}
					</thead>
					<tbody>
						{
							(student.class==="9th" || student.class==="10th") &&
							<tr>
								<th>{student.roll}</th>
								<th>{student.name}</th>
								<th>{student.mobile}</th>
								<th>{student.gender}</th>
								<th>{student.class}</th>
								<th>{student.hindi}</th>
								<th>{student.english}</th>
								<th>{student.maths}</th>
								<th>{student.social}</th>
								<th>{student.science}</th>
								<th>{student.sanskrit}</th>
								<th>{student.address}</th>
							</tr>
						}
						{
							((student.class==="11th" || student.class==="12th") && (student.branch=="Maths")) &&
							<tr>
								<th>{student.roll}</th>
								<th>{student.name}</th>
								<th>{student.mobile}</th>
								<th>{student.gender}</th>
								<th>{student.class}</th>
								<th>{student.branch}</th>
								<th>{student.hindi}</th>
								<th>{student.english}</th>
								<th>{student.maths}</th>
								<th>{student.physics}</th>
								<th>{student.chemistry}</th>
								<th>{student.address}</th>
							</tr>
						}
						{
							((student.class==="11th" || student.class==="12th") && (student.branch=="Biology")) &&
							<tr>
								<th>{student.roll}</th>
								<th>{student.name}</th>
								<th>{student.mobile}</th>
								<th>{student.gender}</th>
								<th>{student.class}</th>
								<th>{student.branch}</th>
								<th>{student.hindi}</th>
								<th>{student.english}</th>
								<th>{student.biology}</th>
								<th>{student.physics}</th>
								<th>{student.chemistry}</th>
								<th>{student.address}</th>
							</tr>
						}
						{
							((student.class==="11th" || student.class==="12th") && (student.branch=="Commerce")) &&
							<tr>
								<th>Hindi</th>
								<th>English</th>
								<th>Account</th>
								<th>Business</th>
								<th>Economics</th>
							</tr>
						}
					</tbody>
				</table>
		</div>
	);
}
