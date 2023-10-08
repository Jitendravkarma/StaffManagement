import './mnguser.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiuserurl } from '../apiURL';
import axios from 'axios';
function Manage() {
	const navigate = useNavigate();
	const [user, setUser] = useState([]);
	useEffect(()=>{
		axios.get(apiuserurl+'fetch?role=user').then((res)=>{
			setUser(res.data);
		}).catch(()=>{
			console.log('');
		})
	});
	const bvduser=(_id,s)=>{
    if(s=="block")
    {
        let updateDetails={"condition_obj":{"_id":_id},"set_condition":{"status":0}};
        axios.patch(apiuserurl+"update",updateDetails).then((response)=>{
            navigate("/manageuser");
        }).catch((err)=>{
            console.log(err);
        });
    }
    else if(s=="verify")
    {
        let updateDetails={"condition_obj":{"_id":_id},"set_condition":{"status":1}};
        axios.patch(apiuserurl+"update",updateDetails).then((response)=>{
            navigate("/manageuser");
        }).catch((err)=>{
            console.log(err);
        });
    }
    else
    {
        let deleteDetails={"data":{"_id":_id}};
        axios.delete(apiuserurl+"delete",deleteDetails).then((response)=>{
            navigate("/manageuser");
        }).catch((err)=>{
            console.log(err);
        });            
    }
  }
	return (
		<div className="contain">
			<h1>Manage Users</h1>
			<table cellPadding="5" border="2" align="center" className="table-bordered">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Mobile</th>
						<th>Gender</th>
						<th>Class</th>
						<th>Branch</th>
						<th>Subject</th>
						<th>Marital Status</th>
						<th>Spouse Name</th>
						<th>City</th>
						<th>Address</th>
						<th>Status</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
				{
					user.map((userDetails)=>(
						<tr key={userDetails._id}>
							<td>{userDetails.name}</td>
							<td>{userDetails.email}</td>
							<td>{userDetails.mobile}</td>
							<td>{userDetails.gender}</td>
							<td>{userDetails.class}</td>
							<td>{(userDetails.branch === "")?"NA": userDetails.branch}</td>
							<td>{userDetails.subject}</td>
							<td>{userDetails.marital}</td>
							<td>
								{(userDetails.gender==="female")?"Mr.":"Mrs."}{(userDetails.spouse==="")?"NA":userDetails.spouse}
							</td>
							<td>{userDetails.city}</td>
							<td>{userDetails.address}</td>
							<td>
								{
									userDetails.status === 0 && <a className="text-primary" onClick={()=>bvduser(userDetails._id,'verify')}><img src="assets/img/needverify.png" alt="verify" style={{"width":"50px"}}/></a>
								}
								{
									userDetails.status === 1 && <a className="text-warning" onClick={()=>bvduser(userDetails._id,'block')}><img src="assets/img/verified.png" alt="block" style={{"width":"65px"}}/></a>
								}
							</td>
							<td>
								<a className="text-danger" onClick={()=>bvduser(userDetails._id,'delete')}><i className="bi bi-trash"></i></a>
							</td>
						</tr>
					))
				}
				</tbody>
				
			</table>
		</div>
	);
}
export default Manage;