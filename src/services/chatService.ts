import api from "./api";

const findAllConversationsByIdService = {
  findAllConversations: async (id: string) =>
    await api
      .get(`/conversations/${id}`)
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => error.response),

  findConversationById: async (id: string) =>
      await api
        .get(`/messages/${id}`)
        .then((response: any) => {
          return response;
        })
        .catch((error: any) => error.response),
};

const createMessageService = {
  createNewMessage: async (value: any) =>
    await api
      .post(`/messages`, value)
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => error.response)
}


export { findAllConversationsByIdService, createMessageService };

