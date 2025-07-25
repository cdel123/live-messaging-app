import express from "express";
import Message from "../models/message.js";
//post// new message
export const newMessage = async (req, res) => {
  const { chatId, sender, text } = req.body;
  try {
    if (chatId || text || sender) {
      return res
        .status(400)
        .json({ message: "Chat ID and content are required" });
    } else {
      const newMessage = new Message({
        chatId,
        sender,
        text,
      });
      const savedMessage = await newMessage.save();
      res.status(201).json(savedMessage);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get messages of a chat id
export const getMessages = async (req, res) => {
  chatId = req.params.chatId;

  try {
    const messages = await Message.find({ chatId }).populate(
      "sender",
      "username"
    );
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMessage = async (req, res) => {
  const messageId = req.params.id;
  try {
    const deletedMessage = await Message.findByIdAndDelete(messageId);
    if (!deletedMessage) {
      return res.status(404).json({ message: "Message not found" });
    }
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateMessage = async (req, res) => {
  const messageId = req.params.id;
  const { text } = req.body;
  try {
    const updatedMessage = await Message.findByIdAndUpdate(
      messageId,
      { text },
      { new: true }
    );
    if (updatedMessage) {
      res.status(200).json(updatedMessage);
    } else {
      res.status(404).json({ message: "Message not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
