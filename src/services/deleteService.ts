import api from './api';

const deleteService = {
  deleteUser: async (id: any) => {
    console.log(id);
    await api
    .delete('admin/delete', id)
    .then((response: any) => { return response })
    .catch((error: any) => error.response)
  }
	
};


export { deleteService };