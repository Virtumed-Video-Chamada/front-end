import api from './api';

const healthService = {
  updateHealth: (values: any, role: string) =>
    api
      .post(`/infoPacient`, values)
      .then((response: any) => { return response })
      .catch((error: any) => error.response),
}

export { healthService };
