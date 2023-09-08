import './AdminStudent.css';
import { useState } from 'react';
export default function Mngstudent(props) {
	const [cls, setCls] = useState('');
	return(
		<>
			<div className="contain">
				<h1>Manage Student</h1>
				<form>
					<select className="p-2 my-3" value={cls} onChange={e=>setCls(e.target.value)}>
						<option>Select Class</option>
						<option>9th</option>
						<option>10th</option>
						<option>11th</option>
						<option>12th</option>
					</select>
				</form>
				<div className="container">
					<div className="row">
						<div className="col-4">
							
						</div>
						<div className="col-4" style={{"border":"1px solid","padding":"10px"}}>
							<h3 className="bg-secondary text-light">1st Rank</h3>
							<h4>Student Name:- Jitendra</h4>
							<h4>Roll Number:- 4</h4>
						</div>
						<div className="col-4">
							
						</div>
						<div className="col-2">
							
						</div>
						<div className="col-4" style={{"border":"1px solid","padding":"10px"}}>
							<h3 className="bg-secondary text-light">2nd Rank</h3>
							<h4>Student Name:- Mukesh</h4>
							<h4>Roll Number:- 10</h4>
						</div>
						<div className="col-4" style={{"border":"1px solid","padding":"10px"}}>
							<h3 className="bg-secondary text-light">3rd Rank</h3>
							<h4>Student Name:- Rajendra</h4>
							<h4>Roll Number:- 2</h4>
						</div>
						<div className="col-2">
							
						</div>
						<div className="col-12" style={{"textAlign":"left","border":"1px solid","padding":"10px"}}>
							<h4 className="bg-secondary text-light">4th Rank</h4>
							<h5>Student Name:- Rajiv</h5>
							<h5>Roll Number:- 5</h5>
						</div>
					</div>
				</div>
				{/*<table cellPadding="5" border="2" align="center" className="table-bordered">
					<thead>
						<tr>
							<th>1st Rank</th>
						</tr>
					</thead>
					<tbody>

					</tbody>
				</table>
				*/}
			</div>
		</>
	);
}