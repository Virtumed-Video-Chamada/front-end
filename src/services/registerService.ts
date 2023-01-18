import api from './api';


const registerService = {
	registerValues: (values: any) =>
		api
			.post(`users/${values.role}`, values)
			.then((response: any) => response)
			.catch((error: any) => error.response),
};

export {  registerService };
