import { userLogin } from '../@types/interfaces';
import api from './api';


const appointmentService = {
	appointmentDisponibleDay: (id: any) =>
		api
			.get(`providers/${id}/month-availability`)
			.then((response: any) => { return response })
      .catch((error: any) => console.log('ERRO NA CHAMADA:', error)),
  
    appointmentDisponibleHour: (id: any) =>
      api
        .get(`providers/${id}/day-availability`)
        .then((response: any) => { return response })
        .catch((error: any) => console.log('ERRO NA CHAMADA:', error)),
};


export { appointmentService };
