import express from 'express';

const chatRouter = express.Router();

chatRouter.post('/api/chats', newChat);
chatRouter.get('/api/chats', fetchChats);
chatRouter.post('/api/chats/group', createGroupChat);
chatRouter.delete('/api/chats/:chatId', deleteChat);
chatRouter.put('/api/chats/group-remove', removeFromGroup);

export default chatRouter;