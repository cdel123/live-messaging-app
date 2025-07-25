import express from 'express';
import {newMessage, getMessages, deleteMessage, updateMessage} from '../controllers/messageController.js';
import message from '../models/message.js';
const msgRouter = express.Router();

msgRouter.post('/api/messages',newMessage); 
msgRouter.get('/api/messages/:chatId', getMessages);
msgRouter.delete('/api/messages/:id', deleteMessage);
msgRouter.patch('/api/messages/:id', updateMessage);
 
export default msgRouter;