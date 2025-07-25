import Chat from '../models/chat.js';
import User from '../models/user.js';

// POST /api/chats
// Create or fetch a one-on-one chat
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

// POST /api/chats/group
// Create a new group chat
export const createGroupChat = async (req, res) => {
  if (!req.body.users || !req.body.name) {
    return res.status(400).send({ message: 'Please fill all the fields' });
  }

  var users = JSON.parse(req.body.users);

  if (users.length < 2) {
    return res
      .status(400)
      .send('More than 2 users are required to form a group chat');
  }

  users.push(req.user);

  try {
    const groupChat = await Chat.create({
      chatName: req.body.name,
      users: users,
      isGroupChat: true,
      groupAdmin: req.user,
    });

    const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
      .populate('users', '-password')
      .populate('groupAdmin', '-password');

    res.status(200).json(fullGroupChat);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// DELETE /api/chats/:chatId
export const deleteChat = async (req, res) => {
    try {
        const chat = await Chat.findByIdAndDelete(req.params.chatId);
        if (!chat) {
            return res.status(404).send({ message: 'Chat not found' });
        }
        res.status(200).send({ message: 'Chat deleted successfully' });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};


// PUT /api/chats/group-remove
export const removeFromGroup = async (req, res) => {
  const { chatId, userId } = req.body;

  const removed = await Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate('users', '-password')
    .populate('groupAdmin', '-password');

  if (!removed) {
    res.status(404).send({ message: 'Chat Not Found' });
  } else {
    res.json(removed);
  }
};
