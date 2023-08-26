import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function Secure() {
	const navigate = useNavigate();
	useEffect(()=>{
		var path = window.location.pathname;
		if (path === '/admin' || path === '/manageuser') {
			if (!localStorage.getItem('token') || localStorage.getItem('role') !== 'admin') {
				navigate('/logout');
			}
		}
		else if (path === '/user') {
			if (!localStorage.getItem('token') || localStorage.getItem('role') !== 'user') {
				navigate('/logout');
			}
		}
		else if (path === '/forget-password') {
			if (!localStorage.getItem('email')) {
				navigate('/checkemail');
			}
		}
		else {
			if (localStorage.getItem('role') === 'admin') {
				navigate('/admin');
			}
			else if (localStorage.getItem('role') === 'user') {
				navigate('/user');
			}
			else if (localStorage.getItem('email')) {
				navigate('/forget-password');
			}
			else {
				navigate('/');
			}
		}
	},[]);
	return (
		<>
		</>
	);
}
export default Secure;