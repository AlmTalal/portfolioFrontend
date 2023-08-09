import { io } from "socket.io-client";
const socket = io("https://bolt-ai-chatbot.onrender.com");
//const socket = io("http://localhost:3001");

class ChatServices {
  connected() {
    console.log(socket.on("connect"), console.log(socket.id));
  }

  sendMessage(message, messages) {
    socket.emit("sendMessage", { message, pastMessages: messages });
  }
}

const ChatService = new ChatServices();

export { ChatService, socket };
