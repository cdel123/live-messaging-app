import express from 'express';
import { registerUser, loginUser, getAllUsers } from '../controllers/userController.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/', getAllUsers);

export default router;
