import api from './api';

const findAllService = {
		findAllUsers: async (value: string) =>
		await api
			.get(`${value}`)
			.then((response: any) => { return response })
			.catch((error: any) => error.response),
};




const findByIdService = {
	findProfileById: (id: string) =>
		api
			.get(`/profile/${id}`)
			.then((response: any) => response)
			.catch((error: any) => console.log(error)),

};

export { findAllService, findByIdService };

