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
				<table cellPadding="5" border="2" align="center" className="table-bordered">
					<thead>
						<tr>
							<th rowSpan="2">Roll</th>
							<th rowSpan="2">Name</th>
							<th rowSpan="2">Mobile</th>
							<th rowSpan="2">Gender</th>
							<th rowSpan="2">Class</th>
							{
								(cls === "9th" || cls === "10th") &&
								<th colSpan="6">Marks</th>
							}
							{
								(cls === "11th" || cls === "12th") &&
								<>
									<th rowSpan="2">Branch</th>
									<th colSpan="5">Marks</th>
								</>
							}
							<th rowSpan="2">Address</th>
						</tr>
					</thead>
					<tbody>
						{
							props.student.map((data)=>(
								(cls === data.class) && 
								<tr key={data._id}>
									<td>{data.roll}</td>
									<td>{data.name}</td>
									<td>{data.mobile}</td>
									<td>{data.gender}</td>
									<td>{data.class}</td>
									<td>{data.hindi}</td>
									<td>{data.english}</td>
									{
										data.branch === "" &&
										<>
											<td>{data.maths}</td>
											<td>{data.social}</td>
											<td>{data.science}</td>
											<td>{data.sanskrit}</td>
										</>
									}
									{
										data.branch === "Maths" &&
										<>
											<td>{data.maths}</td>
											<td>{data.physics}</td>
											<td>{data.chemistry}</td>
										</>
									}
									{
										data.branch === "Biology" &&
										<>
											<td>{data.biology}</td>
											<td>{data.physics}</td>
											<td>{data.chemistry}</td>
										</>
									}
									<td>{data.address}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</>
	);
}