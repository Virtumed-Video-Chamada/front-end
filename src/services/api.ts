import axios from 'axios';
import { getStorage } from './adminStorage';

const api = axios.create({
	// baseURL: 'https://159.223.106.132/',
	baseURL: 'https://humberto.online/',
});

api.interceptors.request.use(async (config: any) => {
	try {
		await getStorage('jwt').then((token: any) => {
			if (token != null) {
				config.headers.authorization = `Bearer ${token}`;
			}

		}	
		)
		return config	
	} catch (error: any) {
		console.log(error);
	}
});

export default api;
