import './Staff.css';

export default function Staff(props) {
	return (
		<div className="contain container">
			<h1>Our Teachers Staff</h1>
			<div className="row">
                {
                	props.user.map((data)=>(
                		<div className="round col-lg-4 col-sm-6 my-3" data-wow-delay="0.1s" style={{"minHeight":"450px"}} key={data._id}>
		                    <div className="service-item text-center pt-3" style={{"border":"1px solid","minHeight":"460px"}}>
		                        <div className="p-0">
		                            {
		                            	props.img.map((imgs)=>(
	                            			data.email === imgs.catnm && 
	                            			<img key={imgs._id}src={"assets/uploads/"+(imgs.caticonnm)} alt="profile" style={{"width":"250px","height":"250px","objectFit":"cover"}}/>
		                            	))
		                            }
		                            <h4 className="mt-3">{data.name}</h4>
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