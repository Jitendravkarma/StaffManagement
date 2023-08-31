import './user.css';
export default function User(props) {
	return (
		<div className="contain">
			{
				props.img.map((imgs)=>(
					imgs.catnm === localStorage.getItem("email") &&
					<img src={"assets/uploads/"+(imgs.caticonnm)} alt={localStorage.getItem("name")} style={{"width":"250px","height":"250px","objectFit":"cover"}} key={imgs._id}/>
				))
			}
			<h1 className="mt-2">Welcome {(localStorage.getItem("gender")==="male")? "Mr.":(localStorage.getItem("marital")==="Married")?"Mrs.":"Miss"} {localStorage.getItem("name")}</h1>
		</div>
	);
}