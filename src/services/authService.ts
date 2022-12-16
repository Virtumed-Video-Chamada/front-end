import { userLogin } from '../@types/interfaces';
import api from './api';


const loginService = {
	login: (values: userLogin) =>
		api
			.post('/login', values)
			.then((response: any) => response)
			.catch((error: any) => console.log('ERRO NA CHAMADA:', error)),
};


export { loginService};
