import axios from "axios";

const instance = axios.create({
	baseURL: 'https://ilegra-swapi.herokuapp.com/',
	timeout: 2000
})

/**
 * Response interceptor
 */
instance.interceptors.response.use(
	response => response,
	error => {
		return Promise.reject(error.response);
	}
);

export default instance;
