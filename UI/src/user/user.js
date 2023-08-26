import './user.css';
import { useEffect, useState } from 'react';
import { apiuserurl, apicategoryurl } from '../apiURL';
import axios from 'axios';
export default function User() {
	const [img, setImg] = useState([]);
	useEffect(()=>{
		axios.get(apicategoryurl+'fetch').then((res)=>{
			setImg(res.data);
		}).catch(()=>{
			console.log('');
		});
	});
	return (
		<div className="contain">
			{
				img.map((imgs)=>(
					imgs.catnm === localStorage.getItem("email") &&
					<img src={"assets/uploads/"+(imgs.caticonnm)} alt={localStorage.getItem("name")} style={{"width":"250px","height":"250px","objectFit":"cover"}} key={imgs._id}/>
				))
			}
			<h1 className="mt-2">Welcome {(localStorage.getItem("gender")=="male")? "Mr.":(localStorage.getItem("marital")==="Married")?"Mrs.":"Miss"} {localStorage.getItem("name")}</h1>
		</div>
	);
}