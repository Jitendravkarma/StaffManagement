import './Upload.css';
import { useState } from 'react';
import { apicategoryurl } from '../apiURL';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Upload() {
	const navigate = useNavigate();
	const [ out, setOut ] = useState('');
	const [ email, setEmail ] = useState(localStorage.getItem("email"));
	const [ file, setFile ] = useState();
	const handleChange = (event)=>{
		setFile(event.target.files[0]);
	}
	const handleSub = (event)=>{
		event.preventDefault();
		if (file === undefined) {
			setOut(`Please select an image!`);
		}
		else {
			var formData = new FormData();
			formData.append('catnm', email);
			formData.append('caticon', file);
			const config = {
				"content-type":"multipart/form-data"
			}
			axios.post(apicategoryurl+'save', formData, config).then((res)=>{
				setOut(`Photo uploaded successfully!`);
			}).catch((er)=>{
				console.log(er);
			});
		}
	}
	return (
		<div className="contain">
			<h1>Upload Your Profile Picture Here!</h1>
			
			<form className="my-4">
				<span style={{"color":"red"}}>{out}</span>
				<table className="table table-bordered w-50" cellSpacing="10" cellPadding="10" align="center">
					<thead>
						<tr>
							<th>Email</th>
							<th>Choose file</th>
							<th>Upload</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><input type="text" className="form-control" value={email} onChange={e=>setEmail(localStorage.getItem("email"))} disabled/></td>
							<td><input type="file" className="form-control bg-light" accept="image/png, image/jpeg, image/jpg" onChange={handleChange}/></td>
							<td>
								<button type="button" className="btn btn-primary" 
	            				onClick={handleSub}>Upload</button>
            				</td>
						</tr>
					</tbody>
				</table>
			</form>
		</div>
	);
}