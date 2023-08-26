import './Staff.css';
import { useEffect, useState } from 'react';
import { apiuserurl, apicategoryurl } from '../apiURL';
import axios from 'axios';
export default function Staff() {
	const [user, setUser] = useState([]);
	const [img, setImg] = useState([]);
	useEffect(()=>{
		axios.get(apiuserurl+'fetch?role=user').then((res)=>{
			setUser(res.data);
		}).catch(()=>{
			console.log('');
		});
		axios.get(apicategoryurl+'fetch').then((res)=>{
			setImg(res.data);
		}).catch(()=>{
			console.log('');
		});
	});
	return (
		<div className="contain container">
			<h1>Our Teachers Staff</h1>
			<div className="row">
                {
                	user.map((data)=>(
                		<div className="round col-lg-4 col-sm-6 mt-2 mb-2 wow fadeInUp" data-wow-delay="0.1s" style={{"minHeight":"450px"}} key={data._id}>
		                    <div className="service-item text-center pt-3" style={{"border":"1px solid","minHeight":"450px"}}>
		                        <div className="p-0">
		                            {
		                            	img.map((imgs)=>(
	                            			data.email === imgs.catnm && 
	                            			<img key={imgs._id}src={"assets/uploads/"+(imgs.caticonnm)} alt="profile" style={{"width":"250px","height":"250px","objectFit":"cover"}}/>
		                            	))
		                            }
		                            <h4 className="mt-3">Name: - {data.name}</h4>
		                            <h6>Class:- {data.class}</h6>
		                            <h6>Subject: - {data.subject}</h6>
		                            <h6>Mob:- {data.mobile}</h6>
		                            <h6>Status:- {(data.status === 1)?"Permanent Teacher":"Guest Teacher"}</h6>
		                        </div>
		                    </div>
		                </div>
                	))
                }
            </div>
		</div>
	);
}