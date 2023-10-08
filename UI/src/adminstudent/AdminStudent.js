import './AdminStudent.css';
import { useState } from 'react';
export default function Mngstudent(props) {
	const [cls, setCls] = useState('');
	let [inc, setInc] = useState(1);
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
						
					</div>
				</div>
			</div>
		</>
	);
}