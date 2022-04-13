// const  WebSockets=(client)=> {
//   let users=[];
//   const addUser = (userId, socketId) => {
//     !users.some((user) => user.userId === userId) &&
//       users.push({ userId, socketId });
//   };
  
//   const removeUser = (socketId) => {
//     users = users.filter((user) => user.socketId !== socketId);
//   };
  
//   const getUser = (userId) => {
//     return users.find((user) => user.userId === userId);
//   };
  
//   client.on("connection", (socket) => {
//     //when ceonnect
//     console.log("a user connected.");
  
//     //take userId and socketId from user
//     socket.on("addUser", (userId) => {
//       addUser(userId, socket.id);
//       client.emit("getUsers", users);
//     });
    
//     //send and get message
//     socket.on("sendMessage", ({ roomId, text }) => {
//       // const user = getUser(receiverId);
//       client.to(roomId).emit("getMessage", {
//         text,
//       });
//     });
  
//     //when disconnect
//     socket.on("disconnect", () => {
//       console.log("a user disconnected!");
//       removeUser(socket.id);
//       client.emit("getUsers", users);
//     });
//   });

//   //take userId and socketId from user
//   socket.on("addUser", (userId) => {
//     addUser(userId, socket.id);
//     io.emit("getUsers", users);
//   });

//   //send and get message
//   socket.on("sendMessage", ({ senderId, receiverId, text }) => {
//     const user = getUser(receiverId);
//     io.to(user.socketId).emit("getMessage", {
//       senderId,
//       text,
//     });
//   });

//   //when disconnect
//   socket.on("disconnect", () => {
//     console.log("a user disconnected!");
//     removeUser(socket.id);
//     io.emit("getUsers", users);
//   });
  
//     // users = [];
//     // connection(client) {
//     //   // event fired when the chat room is disconnected
//     //   client.on("disconnect", () => {
//     //     this.users = this.users.filter((user) => user.socketId !== client.id);
//     //   });
//     //   client.on("sendMessage",()=>{
//     //     client.emit("getMessage",message);
//     //   })
//     //   // add identity of user mapped to the socket id
//     //   client.on("identity", (userId) => {
//     //     this.users.push({
//     //       socketId: client.id,
//     //       userId: userId,
//     //     });
//     //   });
//     //   // subscribe person to chat & other user as well
//     //   client.on("subscribe", (room, otherUserId = "") => {
//     //     this.subscribeOtherUser(room, otherUserId);
//     //     client.join(room);
//     //   });
//     //   // mute a chat room
//     //   client.on("unsubscribe", (room) => {
//     //     client.leave(room);
//     //   });
//     // }
  
//     // subscribeOtherUser(room, otherUserId) {
//     //   const userSockets = this.users.filter(
//     //     (user) => user.userId === otherUserId
//     //   );
//     //   userSockets.map((userInfo) => {
//     //     const socketConn = global.io.sockets.connected(userInfo.socketId);
//     //     if (socketConn) {
//     //       socketConn.join(room);
//     //     }
//     //   });
//     // }
//   }

//   socket.on("joinRoom",(roomId)=>{
//     client.join(roomId);
//   })
//   socket.on("leaveRoom",(roomId)=>{
//     client.leave(roomId);
//   })
  
//   module.exports= WebSockets;
  