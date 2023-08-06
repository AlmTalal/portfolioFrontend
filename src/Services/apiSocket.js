import { io } from "socket.io-client";
const socket = io("http://localhost:3001");

class ChatServices {
  connected() {
    console.log(socket.on("connect"), console.log(socket.id));
  }

  sendMessage(message, messages) {
    socket.emit("sendMessage", message);
  }
}

const ChatService = new ChatServices();

export { ChatService, socket };
