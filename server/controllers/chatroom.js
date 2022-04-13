// utils
// import makeValidation from '@withvoid/make-validation';
// models
const ChatRoomModel =require('../models/chatroom');
const ChatMessageModel=require('../models/chatmessage');
const User =require('../models/users');

module.exports={
  initiate: async (req, res) => {
    try {
      // const validation = makeValidation(types => ({
      //   payload: req.body,
      //   checks: {
      //     userIds: { 
      //       type: types.array, 
      //       options: { unique: true, empty: false, stringOnly: true } 
      //     },
      //     type: { type: types.enum, options: { enum: CHAT_ROOM_TYPES } },
      //   }
      // }));
      // if (!validation.success) return res.status(400).json({ ...validation });
      const { name,userIds, type } = req.body;
      // const { userId: chatInitiator } = 'woow';
      const chatInitiator='89869c0b1d5b49299969f8e570b57c80';
      const allUserIds = [...userIds, chatInitiator];
      const chatRoom = await ChatRoomModel.initiateChat(name,allUserIds, type, chatInitiator);
      return res.status(200).json({ success: true, chatRoom });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error: error })
    }
  },
  postMessage: async (req, res) => {
    try {
      const { roomId } = req.params;
      // const validation = makeValidation(types => ({
      //   payload: req.body,
      //   checks: {
      //     messageText: { type: types.string },
      //   }
      // }));
      // if (!validation.success) return res.status(400).json({ ...validation });

      const messagePayload = {
        messageText: req.body.messageText,
      };
      const currentLoggedUser=req.body.user;
      const post = await ChatMessageModel.createPostInChatRoom(roomId, messagePayload, currentLoggedUser);
      global.io.sockets.in(roomId).emit('new message', { message: post });
      return res.status(200).json({ success: true, post });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error: error })
    }
  },
  getRecentConversation: async (req, res) => {
    try {
      const currentLoggedUser = req.userId;
      const options = {
        page: parseInt(req.query.page) || 0,
        limit: parseInt(req.query.limit) || 10,
      };
      const rooms = await ChatRoomModel.getChatRoomsByUserId(currentLoggedUser);
      const roomIds = rooms.map(room => room._id);
      const recentConversation = await ChatMessageModel.getRecentConversation(
        roomIds, options, currentLoggedUser
      );
      return res.status(200).json({ success: true, conversation: recentConversation });
    } catch (error) {
      return res.status(500).json({ success: false, error: error })
    }
  },
  getConversationByRoomId: async (req, res) => {
    try {
      const { roomId } = req.params;
      const room = await ChatRoomModel.getChatRoomByRoomId(roomId)
      if (!room) {
        return res.status(400).json({
          success: false,
          message: 'No room exists for this id',
        })
      }
      const name=room.name;
      const users = await User.getUserByIds(room.userIds);
      const options = {
        page: parseInt(req.query.page) || 0,
        limit: parseInt(req.query.limit) || 10,
      };
      const conversation = await ChatMessageModel.getConversationByRoomId(roomId, options);
      return res.status(200).json({
        success: true,
        name,
        conversation,
        users,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error });
    }
  },
  markConversationReadByRoomId: async (req, res) => {
    try {
      const { roomId } = req.params;
      const room = await ChatRoomModel.getChatRoomByRoomId(roomId)
      if (!room) {
        return res.status(400).json({
          success: false,
          message: 'No room exists for this id',
        })
      }

      const currentLoggedUser = req.userId;
      const result = await ChatMessageModel.markMessageRead(roomId, currentLoggedUser);
      return res.status(200).json({ success: true, data: result });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error });
    }
  },
  getChatRoomsByUserId: async (req, res) => {
    try {
      const currentLoggedUser = req.params.id;
      const rooms = await ChatRoomModel.getChatRoomsByUserId(currentLoggedUser);
      const roomIds = rooms.map(room => room._id);
      return res.status(200).json({ success: true, roomIds: roomIds });
    } catch (error) {
      return res.status(500).json({ success: false, error: error })
    }
  },
}