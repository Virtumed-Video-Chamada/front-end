import api from './api';


const historicMedicalService = {
	historicClinic: (values: any) =>
		api
			.post('medicalRecord', values)
			.then((response: any) => { return response })
			.catch((error: any) => error.response),
};

export {  historicMedicalService };
