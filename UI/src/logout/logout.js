import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
function Logout() {
	localStorage.removeItem('token');
	localStorage.removeItem('role');
	localStorage.removeItem('id');
	localStorage.removeItem('name');
	localStorage.removeItem('mobile');
	localStorage.removeItem('email');
	localStorage.removeItem('password');
	localStorage.removeItem('gender');
	localStorage.removeItem('class');
	localStorage.removeItem('branch');
	localStorage.removeItem('subject');
	localStorage.removeItem('address');
	localStorage.removeItem('marital');
	localStorage.removeItem('info');
	localStorage.removeItem('status');
	return (
		<div>
			<Navigate to="/login"/>
		</div>
	);
}
export default Logout;