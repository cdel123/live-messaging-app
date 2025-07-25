import express from 'express';

const msgRouter = express.Router();

router.post('/api/messages',newMessage); 
router.get('/api/messages/:chatId', getMessages);
router.delete('/api/messages/:id', deleteMessage);
router.patch('/api/messages/:id', updateMessage);
 
export default msgRouter;