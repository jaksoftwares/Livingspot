"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

// Define TypeScript types
type Message = { sender: string; text: string };
type ChatData = Record<number, { tenant: string; messages: Message[] }>;

const chatData: ChatData = {
  1: { tenant: "Alice Johnson", messages: [{ sender: "Alice", text: "Is the house still available?" }, { sender: "Me", text: "Yes, it is!" }] },
  2: { tenant: "Mark Davis", messages: [{ sender: "Me", text: "Welcome to the house!" }, { sender: "Mark", text: "Thank you!" }] },
  3: { tenant: "Sarah Lee", messages: [{ sender: "Sarah", text: "Can I view the house this weekend?" }, { sender: "Me", text: "Sure, what time works for you?" }] },
};

const ChatPage = () => {
  const searchParams = useSearchParams();
  const chatId = Number(searchParams.get("id")); // Convert chatId to a number

  // Ensure chatId is a valid number
  const chat = chatData[chatId] ?? null;
  const [messages, setMessages] = useState<Message[]>(chat ? chat.messages : []);
  const [newMessage, setNewMessage] = useState<string>("");

  // Prevent rendering when chat is invalid
  if (!chat) {
    return <div className="p-6 text-red-500">Chat not found.</div>;
  }

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages((prevMessages) => [...prevMessages, { sender: "Me", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">Chat with {chat.tenant}</h1>

      <div className="mt-4 h-64 overflow-y-auto bg-gray-100 p-4 rounded-lg">
        {messages.map((msg: Message, index: number) => (
          <div key={index} className={`mb-2 p-2 rounded-lg max-w-xs ${msg.sender === "Me" ? "bg-blue-500 text-white self-end ml-auto" : "bg-gray-300 text-black"}`}>
            <p className="text-sm">{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex">
        <input 
          type="text" 
          value={newMessage} 
          onChange={(e) => setNewMessage(e.target.value)} 
          placeholder="Type a message..." 
          className="flex-1 p-2 border rounded-lg"
        />
        <button onClick={sendMessage} className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
