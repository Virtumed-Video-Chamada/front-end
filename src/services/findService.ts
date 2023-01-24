import api from './api';

const findAllService = {
		findAllUsers: async (value: string) =>
		await api
			.get(`${value}`)
			.then((response: any) => { return response })
			.catch((error: any) => error.response),
};

const findByIdService = {
	findProfileByIdDoctor: (id: any) =>
		api
			.post('/profile/findDoctor', id)
			.then((response: any) => { return response })
			.catch((error: any) => console.log(error)),
	findProfileByIdClinic: (id: any) =>
			api
				.post('/profile/findClinic', id)
				.then((response: any) => { return response })
			.catch((error: any) => console.log(error)),
	findProfileByIdPacient: (id: any) =>
			api
				.post('/profile/findPacient', id)
				.then((response: any) => { return response })
				.catch((error: any) => console.log(error)),
};

export { findAllService, findByIdService };

