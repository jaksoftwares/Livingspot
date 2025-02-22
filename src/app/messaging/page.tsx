"use client";
import { useEffect, useState } from "react";
import { fetchMessages } from "@/services/api";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const { data } = await fetchMessages();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    loadMessages();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Messages</h1>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id} className="border-b py-2">
            {msg.sender}: {msg.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
