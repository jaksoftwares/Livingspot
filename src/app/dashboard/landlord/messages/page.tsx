"use client";

import Link from "next/link";

const conversations = [
  { id: 1, tenant: "Alice Johnson", property: "Apartment 101", lastMessage: "Is the house still available?", unread: 2 },
  { id: 2, tenant: "Mark Davis", property: "Studio 205", lastMessage: "Thank you for accepting my request.", unread: 0 },
  { id: 3, tenant: "Sarah Lee", property: "Townhouse 12", lastMessage: "Can I view the house this weekend?", unread: 1 },
];

const MessagesPage = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800">💬 Messages</h1>
      <p className="text-gray-600 mt-2">Chat with tenants about property inquiries.</p>

      <div className="mt-6 space-y-4">
        {conversations.map((chat) => (
          <Link key={chat.id} href={`/dashboard/landlord/messages/chat?id=${chat.id}`} className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">{chat.tenant}</p>
                <p className="text-gray-600 text-sm">{chat.property}</p>
                <p className="text-gray-500 text-sm">{chat.lastMessage}</p>
              </div>
              {chat.unread > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{chat.unread}</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MessagesPage;
