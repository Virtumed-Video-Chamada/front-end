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
    appointmentListPatient: (id: any) =>
      api
        .get(`appointments/forPatient`, id)
        .then((response: any) => {
          console.log(id);
          console.log(response)
          return (
            response) })
      .catch((error: any) => console.log('ERRO NA CHAMADA:', error)),
    appointmentListDoctor: (id: any) =>
      api
        .get(`appointments/forDoctor`, id)
        .then((response: any) => { return response })
      .catch((error: any) => console.log('ERRO NA CHAMADA:', error)),
    appointmentDelete: (id: any) =>
      api
        .delete(`appointments/delete`, id)
        .then((response: any) => {
          console.log(id);
          console.log(response)
          return (
            response) })
      .catch((error: any) => console.log('ERRO NA CHAMADA:', error)),
    appointmentCreate: (values: any) =>
      api
        .post(`appointments`, values)
        .then((response: any) => {
          console.log(response)
          return (
            response) })
      .catch((error: any) => console.log('ERRO NA CHAMADA:', error)),
    
};


export { appointmentService };
