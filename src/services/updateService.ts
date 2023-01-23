import api from './api';

const updateService = {
	updateUser: ( values: any, role: string) =>
		api
			.put(`/${role}`, values)
			.then((response: any) => { return response })
			.catch((error: any) => error.response),
	
	updatePassword: (values: any) =>
		api
		.put(`/password/reset`, values)
		.then((response: any) => { return response })
			.catch((error: any) => error.response),
	
	updateAvatar: (values: any) =>
		api
		.patch(`/users/avatar`, values)
		.then((response: any) => { return response })
		.catch((error: any) => error.response),
}

export { updateService };
