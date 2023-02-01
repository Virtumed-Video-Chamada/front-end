import api from "./api";

const findAllConversationsByIdService = {
  findAllConversations: async (id: string) =>
    await api
      .get(`/conversations/${id}`)
      .then((response: any) => {
        return response;
      })
      .catch((error: any) => error.response),
};


export { findAllConversationsByIdService };
