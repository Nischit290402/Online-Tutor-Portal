const express = require("express");

const chatRoom = require("../controllers/chatroom.js");
const router = express.Router();

// Connect Chatroom Routes with controller functions

router
  .get("/", chatRoom.getRecentConversation)
  .get("/:roomId", chatRoom.getConversationByRoomId)
  .post("/initiate", chatRoom.initiate)
  .post("/:roomId/message", chatRoom.postMessage)
  .put("/:roomId/mark-read", chatRoom.markConversationReadByRoomId)
  .get("/allrooms/:id", chatRoom.getChatRoomsByUserId);

module.exports = router;
