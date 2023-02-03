import api from './api';

const healthService = {
  updateHealth: (values: any) =>
    api
      .post(`/infoPacient`, values)
      .then((response: any) => { return response })
      .catch((error: any) => error.response),
    findHealth: () =>
      api
        .get(`/infoPacient`)
        .then((response: any) => { return response })
        .catch((error: any) => error.response),
}

export { healthService };
