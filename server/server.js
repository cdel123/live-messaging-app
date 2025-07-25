import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoute.js';
import chatRoutes from './routes/chatRoute.js';
import messageRoutes from './routes/messageRoute.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/messages', messageRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));
