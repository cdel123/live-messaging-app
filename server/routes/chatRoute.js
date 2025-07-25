import express from 'express';
import {newChat, getChats, createGroupChat} from '../controllers/chatController.js';
const chatRouter = express.Router();

chatRouter.post('/api/chats', newChat);
chatRouter.get('/api/chats', getChats);
chatRouter.post('/api/chats/group', createGroupChat);
// chatRouter.delete('/api/chats/:chatId', deleteChat);
// chatRouter.put('/api/chats/group-remove', removeFromGroup);

export default chatRouter;