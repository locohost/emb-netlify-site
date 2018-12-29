//import decode from 'jwt-decode';
import 'whatwg-fetch';

export const login = async (handle, pass) => {
	// Get a token from api server using the fetch api
	try {
		const response = await fetch(`${process.env.REACT_APP_RESTURL}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				handle: handle,
				pass: pass,
			})
		});
		const data = await response.json();
		if (data.error) { throw new Error(data.error); }
		setToken(data.token)
		return Promise.resolve(data);
	} catch (error) {
		console.error('AuthService: login: ', error);
		return Promise.reject(error);
	}
};

export const isLoggedIn = () => {
	const userProfile = getProfile();
	if (userProfile === null) {
		console.warn('Either you are not logged in or your token expired. Please login.');
	}
	return (userProfile !== null);
};

export const isTokenExpired = (token) => {
	// try {
	// 	const decoded = decode(token);
	// 	if (decoded.exp < Date.now() / 1000) { // Checking if token is expired
	// 		return true;
	// 	}
	// 	return false;
	// }
	// catch (error) {
	// 	return false;
	// }
	return false;
};

export const setToken = (idToken) => {
	localStorage.setItem('id_token', idToken)
};

export const getToken = () => {
	return localStorage.getItem('id_token')
};

export const logout = () => {
	localStorage.removeItem('id_token');
};

export const getProfile = () => {
	const token = getToken();
	if (!!token) {
		if (isTokenExpired(token)) { return null; }
		//return decode(token);
		return { hande: 'locohost', email: 'locohost@gmailc.om' };
	}
	return null;
};

// 	// _checkStatus = (response) => {
// 	// 	// raises an error in case response status is not a success
// 	// 	if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
// 	// 		return response
// 	// 	} else {
// 	// 		var error = new Error(response.statusText)
// 	// 		error.response = response
// 	// 		throw error
// 	// 	}
// 	// };
// }
