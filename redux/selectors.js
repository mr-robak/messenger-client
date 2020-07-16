export const loading = (state) => state.loading;

export const userData = (state) => state.user;

export const chatList = (state) => state.chats;

export const messages = (chatId) => (state) => {
  const chat = state.chats.find((chat) => chat.id === chatId);
  const messages = chat.messages;
  return messages;
};
