"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMessageCircle } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";

// Mock existing conversations
const initialConversations = [
  { id: 1, user: "Alice Johnson", property: "Apartment 101", lastMessage: "Is the space still available?", unread: 2 },
  { id: 2, user: "Mark Davis", property: "Studio 205", lastMessage: "Thank you for accepting my request.", unread: 0 },
  { id: 3, user: "Sarah Lee", property: "Townhouse 12", lastMessage: "Can I view the space this weekend?", unread: 1 },
];

// Mock interested users (to be fetched from backend later)
const interestedUsers = [
  { id: 4, name: "Emily Carter", property: "Penthouse 5" },
  { id: 5, name: "David Brown", property: "Loft 21" },
  { id: 6, name: "Sophia Wilson", property: "Apartment 402" },
];

const MessagesPage = () => {
  const [conversations] = useState(initialConversations);
  const [showInterestedUsers, setShowInterestedUsers] = useState(false);
  const [sentRequests, setSentRequests] = useState<{ [key: number]: boolean }>({});

  // Handle sending a chat request
  const handleSendRequest = (userId: number) => {
    setSentRequests({ ...sentRequests, [userId]: true });

    // TODO: Send a request to the backend to notify the user
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 flex items-center">
        💬 Messages
        <button
          onClick={() => setShowInterestedUsers(!showInterestedUsers)}
          className="ml-auto flex items-center bg-blue-600 text-white px-3 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          <IoAdd size={18} className="mr-1" />
          Start Chat
        </button>
      </h1>
      <p className="text-gray-600 mt-2">Chat with users about property inquiries.</p>

      {/* Interested Users List (When 'Start Chat' is Clicked) */}
      {showInterestedUsers && (
        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Interested Users</h2>
          <p className="text-gray-600 text-sm">Select a user to send a chat request.</p>
          <div className="mt-3 space-y-2">
            {interestedUsers.map((user) => (
              <div key={user.id} className="flex justify-between items-center p-3 bg-white rounded-lg shadow">
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-gray-600 text-sm">{user.property}</p>
                </div>
                {sentRequests[user.id] ? (
                  <span className="text-gray-500 text-sm">Request Sent ✅</span>
                ) : (
                  <button
                    onClick={() => handleSendRequest(user.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
                  >
                    Send Request
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Conversation List */}
      <div className="mt-6 space-y-4">
        {conversations.map((chat) => (
          <Link
            key={chat.id}
            href={`/dashboard/agent/messages/chat?id=${chat.id}`}
            className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{chat.user}</p>
                <p className="text-gray-600 text-sm">{chat.property}</p>
                <p className="text-gray-500 text-sm">{chat.lastMessage}</p>
              </div>
              {chat.unread > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{chat.unread}</span>
              )}
              <FiMessageCircle size={20} className="text-blue-500" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MessagesPage;
