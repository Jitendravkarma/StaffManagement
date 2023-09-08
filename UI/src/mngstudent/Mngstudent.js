import './Mngstudent.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apistudenturl } from '../apiURL';
export default function Mngstudent(props) {
	useEffect(()=>{
		axios.get(`${apistudenturl}fetch?role=student`).then((res)=>{
			setStudent(res.data);
		}).catch(()=>{
			console.log('Response not get');
		});
	});
	const navigate = useNavigate();
	const [student, setStudent] = useState([]);
	const deleteRecord = (id)=>{
		const delStudent = {"data":{"_id":id}};
		axios.delete(apistudenturl+"delete", delStudent).then((res)=>{
			navigate('/managestudents');
		});
	}
	return(
		<>
			<div className="contain">
				<h1>Manage Student</h1>
				<table cellPadding="5" border="2" align="center" className="table-bordered">
					<thead>
						<tr>
							<th rowSpan="2">Student Roll</th>
							<th rowSpan="2">Student Name</th>
							<th rowSpan="2">Student Mobile</th>
							<th rowSpan="2">Student Gender</th>
							<th rowSpan="2">Student Class</th>
							{
								(localStorage.getItem("class")==="9th" || localStorage.getItem("class")==="10th") &&
								<th colSpan="6">Marks</th>
							}
							{
								(localStorage.getItem("class")==="11th" || localStorage.getItem("class")==="12th") &&
								<>
									<th rowSpan="2">Student Branch</th>
									<th colSpan="5">Marks</th>
								</>
							}
							<th rowSpan="2">Total</th>
							<th rowSpan="2">Address</th>
							<th rowSpan="2">Delete Record</th>
						</tr>
						{
							(localStorage.getItem("class") === "9th" || localStorage.getItem("class") === "10th") &&
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
							((localStorage.getItem("class") === "11th" || localStorage.getItem("class") === "12th") && localStorage.getItem("branch") === "Maths") &&
							<tr>
								<th>Hindi</th>
								<th>English</th>
								<th>Maths</th>
								<th>Physics</th>
								<th>Chemistry</th>
							</tr>
						}
						{
							((localStorage.getItem("class") === "11th" || localStorage.getItem("class") === "12th") && localStorage.getItem("branch") === "Biology") &&
							<tr>
								<th>Hindi</th>
								<th>English</th>
								<th>Biology</th>
								<th>Physics</th>
								<th>Chemistry</th>
							</tr>
						}
						{
							((localStorage.getItem("class") === "11th" || localStorage.getItem("class") === "12th") && localStorage.getItem("branch") === "Commerce") &&
							<tr>
								<th>Hindi</th>
								<th>English</th>
								<th>Account</th>
								<th>Business Study</th>
								<th>Economic</th>
							</tr>
						}
						{
							((localStorage.getItem("class") === "11th" || localStorage.getItem("class") === "12th") && localStorage.getItem("branch") === "Arts") &&
							<tr>
								<th>Hindi</th>
								<th>English</th>
								<th>History</th>
								<th>Polytical Science</th>
								<th>Economic</th>
							</tr>
						}
					</thead>
					<tbody>
						{
							props.student.map((data)=>(
								(data.class === localStorage.getItem("class") && data.branch === "") &&
								<tr key={data._id}>
									<td>{data.roll}</td>
									<td>{data.name}</td>
									<td>{data.mobile}</td>
									<td>{data.gender}</td>
									<td>{data.class}</td>
									<td>{data.hindi}</td>
									<td>{data.english}</td>
									<td>{data.maths}</td>
									<td>{data.social}</td>
									<td>{data.science}</td>
									<td>{data.sanskrit}</td>
									<td>{data.total}</td>
									<td>{data.address}</td>
									<td>
										<a onClick={()=>{deleteRecord(data._id)}}>Del</a>
									</td>
								</tr>
							))
						}
						{
							props.student.map((data)=>(
								((data.class === "11th" || data.class === "12th") && data.branch === localStorage.getItem("branch")) &&
								<tr key={data._id}>
									{
										data.class === localStorage.getItem("class") &&
										<>
											<td>{data.roll}</td>
											<td>{data.name}</td>
											<td>{data.mobile}</td>
											<td>{data.gender}</td>
											<td>{data.class}</td>
											<td>{data.branch}</td>
											<td>{data.hindi}</td>
											<td>{data.english}</td>
											{
												localStorage.getItem("branch") === "Maths" &&
												<>
													<td>{data.maths}</td>
													<td>{data.physics}</td>
													<td>{data.chemistry}</td>
												</>
											}
											{
												localStorage.getItem("branch") === "Biology" &&
												<>
													<td>{data.biology}</td>
													<td>{data.physics}</td>
													<td>{data.chemistry}</td>
												</>
											}
											{
												localStorage.getItem("branch") === "Commerce" &&
												<>
													<td>{data.account}</td>
													<td>{data.business}</td>
													<td>{data.economics}</td>
												</>
											}
											{
												localStorage.getItem("branch") === "Arts" &&
												<>
													<td>{data.history}</td>
													<td>{data.political}</td>
													<td>{data.economics}</td>
												</>
											}
											<td>{data.address}</td>
										</>
									}
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</>
	);
}