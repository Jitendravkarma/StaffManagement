import './App.css';
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
// import Forget from './fpass/fpass';
import Cpro from './cpro/cpro';
import Category from './category/cat';
import Admin from './admin/admin';
import Staff from './staff/Staff';
import Result from './Studentres/Result';
import User from './user/user';
import Studentregi from './Studentregi/Studentregi';
import Upload from './uploadphoto/Upload';
import Footer from './footer/Footer';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
function App() {
	const [email, setEmail] = useState('vimplaconvent@gmail.com');
	const [add, setAdd] = useState('Sanawad');
	const [phone, setPhone] = useState('+91-99887-76655');
  return (
    <div>
	    <Header add={add} phone={phone} email={email}/>
	    <Nav/>
	    <Routes>
	    	<Route path="/" element={<Home/>}></Route>
	    	<Route path="/about" element={<About/>}></Route>
	    	<Route path="/courses" element={<Course/>}></Route>
	    	<Route path="/contact" element={<Contact add={add} phone={phone} email={email}/>}></Route>
	    	<Route path="/register" element={<Registration/>}></Route>
	    	<Route path="/login" element={<Login/>}></Route>
	    		<Route path="/manageuser" element={<ManageUser/>}></Route>
	    		<Route path="/addcategory" element={<Category/>}></Route>
	    		<Route path="/logout" element={<Logout/>}></Route>
	    		<Route path="/password" element={<Cpass/>}></Route>
	    		<Route path="/checkemail" element={<Email/>}></Route>
	    		<Route path="/forget-password" element={<Forget/>}></Route>
	    	<Route path="/profile" element={<Cpro/>}></Route>
	    	<Route path="/admin" element={<Admin/>}></Route>
	    		<Route path="/teacherstaff" element={<Staff/>}></Route>
	    		<Route path="/studentresult" element={<Result/>}></Route>
	    	<Route path="/user" element={<User/>}></Route>
	    		<Route path="/studentregistration" element={<Studentregi/>}></Route>
	    		<Route path="/managestudents" element={<ManageStudent/>}></Route>
	    		<Route path="/uploadphoto" element={<Upload/>}></Route>
	    </Routes>
	    <Footer add={add} phone={phone} email={email}/>
    </div>
  );
}

export default App;
