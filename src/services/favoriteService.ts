import api from './api';

const favoriteService = {
  addFavoriteDoctor: (id: any) =>
  api
    .post('/favorites', id)
    .then((response: any) => { return response })
      .catch((error: any) => console.log(error)),
  findAllFavoriteDoctor: () =>
      api
        .get('/favorites/findAll')
        .then((response: any) => { return response })
        .catch((error: any) => console.log(error))
};


export { favoriteService };

