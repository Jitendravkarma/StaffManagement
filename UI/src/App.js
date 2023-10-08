import './App.css';
import axios from 'axios';
import { Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { apiuserurl, apicategoryurl, apistudenturl } from './apiURL';
import Header from './header/Header';
import Nav from './navi/Navi';
import Home from './homecompo/Home';
import About from './aboutcompo/About';
import Course from './courses/Courses';
import Contact from './contactcompo/Contact';
import Registration from './regicompo/Regi';
import Login from './logincompo/Login';
import ManageUser from './mnguser/mnguser';
import ManageStudent from './mngstudent/Mngstudent';
import Logout from './logout/logout';
import Cpass from './cpass/cpass';
import Email from './emailverify/Email';
import Forget from './fogetpass/Fpass';
import Cpro from './cpro/cpro';
import Category from './category/cat';
import Admin from './admin/admin';
import AdminStudent from './adminstudent/AdminStudent';
import Staff from './staff/Staff';
import Result from './Studentres/Result';
import User from './user/user';
import Studentregi from './Studentregi/Studentregi';
import TopStudent from './topstudent/Topstudent';
import Upload from './uploadphoto/Upload';
import Footer from './footer/Footer';
function App() {
	const [email, setEmail] = useState('vimplaconvent@gmail.com');
	const [add, setAdd] = useState('Sanawad');
	const [phone, setPhone] = useState('+91-99887-76655');
	const [user, setUser] = useState([]);
	const [img, setImg] = useState([]);
	const [student, setStudent] = useState([]);
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
		axios.get(`${apistudenturl}fetch?role=student`).then((res)=>{
			setStudent(res.data);
		}).catch(()=>{
			console.log('Response not get');
		});
	});
	const [mode, setMode] = useState({
		'backgroundColor':'white',
		'color':'black'
	});
	const toggle = ()=>{
		if (mode.backgroundColor=="black") {
			setMode({
					'backgroundColor':'white',
					'color':'black'
			});
		}
		else {
			setMode({
					'backgroundColor':'black',
					'color':'white'
			});
		}
	}
  return (
    <div>
	    <Header add={add} phone={phone} email={email} onclick={toggle}/>
	    <Nav/>
	    <Routes>
	    	<Route path="/" element={<Home mode={mode}/>}></Route>
	    	<Route path="/about" element={<About/>}></Route>
	    	<Route path="/courses" element={<Course/>}></Route>
	    	<Route path="/contact" element={<Contact add={add} phone={phone} email={email}/>}></Route>
	    	<Route path="/register" element={<Registration/>}></Route>
	    	<Route path="/login" element={<Login/>}></Route>
	    		<Route path="/manageuser" element={<ManageUser/>}></Route>
	    		<Route path="/studentdetails" element={<AdminStudent student={student}/>}></Route>
	    		<Route path="/addcategory" element={<Category/>}></Route>
	    		<Route path="/logout" element={<Logout/>}></Route>
	    		<Route path="/password" element={<Cpass/>}></Route>
	    		<Route path="/checkemail" element={<Email/>}></Route>
	    		<Route path="/forget-password" element={<Forget/>}></Route>
	    	<Route path="/profile" element={<Cpro/>}></Route>
	    	<Route path="/admin" element={<Admin/>}></Route>
	    		<Route path="/teacherstaff" element={<Staff user={user} img={img}/>}></Route>
	    		<Route path="/studentresult" element={<Result/>}></Route>
	    	<Route path="/user" element={<User img={img}/>}></Route>
	    		<Route path="/studentregistration" element={<Studentregi/>}></Route>
	    		<Route path="/topstudent" element={<TopStudent student={student}/>}></Route>
	    		<Route path="/managestudents" element={<ManageStudent student={student}/>}></Route>
	    		<Route path="/uploadphoto" element={<Upload/>}></Route>
	    </Routes>
	    <Footer add={add} phone={phone} email={email}/>
    </div>
  );
}

export default App;
