import Chat from "../models/chat.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const newChat = async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).send({ message: 'UserId param not sent with request' });
  }

  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate('users', '-password')
    .populate('latestMessage');

  isChat = await User.populate(isChat, {
    path: 'latestMessage.sender',
    select: 'username email',
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: 'sender',
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        'users',
        '-password'
      );
      res.status(200).json(FullChat);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
};

// GET /api/chats
// Fetch all chats for a user
export const getChats = async (req, res) => {
  try {
    Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate('users', '-password')
      .populate('groupAdmin', '-password')
      .populate('latestMessage')
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: 'latestMessage.sender',
          select: 'username email',
        });
        res.status(200).send(results);
      });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

export const createGroupChat = async (req, res) => {
  const { chatName, users } = req.body;

  if (!chatName || !users || users.length < 2) {
    return res.status(400).send({
      message: 'Please fill all the fields and select at least 2 users',
    });
  }
  else{
    var grpChatData={
      chatName,
      users: JSON.parse(users),
      isGroupChat: true,
      groupAdmin: req.user._id,
    }    
    try{
      const createdChat= await Chat.create(grpChatData);
      const FullChat = await Chat.findOne({ _id: createdChat._id })
        .populate('users', '-password')
        .populate('groupAdmin', '-password');
    }
  }
}