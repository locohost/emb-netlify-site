import * as authService from './auth-service';
import 'whatwg-fetch';

export const get = async (restUrl, options) => {
	try {
		options = options || { method: 'GET' };
		const token = authService.getToken();
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + token
		};
		const response = await fetch(`${process.env.REACT_APP_RESTURL}${restUrl}`, {
			headers,
			...options
		});
		return await response.json();
	} catch (error) {
		console.error('HttpService: get: ', error);
		return Promise.reject(error);
	}
};

export const post = async (url, formData, options) => {
	try {
		options = options || { method: 'POST' };
		const token = authService.getToken();
		const headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + token
		};
		const response = await fetch(`${process.env.REACT_APP_RESTURL}${url}`, {
			headers,
			...options,
			'body': JSON.stringify(formData)
		});
		const data = await response.json();
		if (data.error) { throw new Error(data.error); }
		return Promise.resolve(data);
	} catch (error) {
		console.error('HttpService: post: ', error);
		return Promise.reject(error);
	}
};
