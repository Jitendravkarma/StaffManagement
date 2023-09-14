import './cat.css';
import { useState } from 'react';
import axios from 'axios';
import { apiusercategory } from '../apiURL';
function Category() {
	const [out, setOut] = useState();
	const [file, setFile] = useState();
	const [catname, setCatname] = useState();
	const handleChange = ()=>{

	}
	return (
		<div className="content">
			<h1 className="w-50 m-auto">Add Category</h1>
			<form className="w-50 m-auto">
				<div className="form-group">
					<label htmlFor="catname" className="">Category Name: -</label>
					<input type="text" className="form-control" id="catname" placeholder="Enter category name" value={catname} onChange={e=>setCatname(e.target.value)}/><br/>
				</div>
				<div className="form-group">
					<label htmlFor="file" className="">Category Icon: -</label>
					<input type="file" id="file" className="form-control" onChange={handleChange}/><br/>
				</div>
				<button type="button" className="btn btn-success">Save</button>
			</form>
		</div>
	);
}
export default Category;