"use client";
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { 
    collection, 
    addDoc, 
    query, 
    orderBy, 
    onSnapshot, 
    where,
    serverTimestamp,
} from 'firebase/firestore';

// ✅ Define TypeScript types
interface Message {
    id: string;
    senderId: string;
    receiverId: string;
    content: string;
    createdAt: Date;
    isRead: boolean;
}

interface ChatBoxProps {
    senderId: string;
    receiverId: string;
}

export default function ChatBox({ senderId, receiverId }: ChatBoxProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>("");

    useEffect(() => {
        if (!senderId || !receiverId) return;

        const messagesRef = collection(db, 'messages');
        const q = query(
            messagesRef, 
            where('senderId', 'in', [senderId, receiverId]), 
            where('receiverId', 'in', [senderId, receiverId]), 
            orderBy('createdAt', 'asc') // ✅ Use createdAt instead of timestamp
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            setMessages(snapshot.docs.map(doc => ({
                id: doc.id, 
                ...doc.data()
            } as Message))); // ✅ Explicitly cast as Message type
        });

        return () => unsubscribe();
    }, [senderId, receiverId]);

    const sendMessage = async () => {
        if (!newMessage.trim()) return;

        await addDoc(collection(db, 'messages'), {
            senderId,
            receiverId,
            content: newMessage,
            createdAt: serverTimestamp(), // ✅ Use createdAt instead of timestamp
            isRead: false
        });

        setNewMessage("");
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg">
            <div className="h-64 overflow-auto">
                {messages.map((msg) => (
                    <div 
                        key={msg.id} 
                        className={`p-2 my-1 ${msg.senderId === senderId ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    >
                        {msg.content}
                    </div>
                ))}
            </div>
            <div className="flex mt-2">
                <input
                    type="text"
                    className="flex-grow p-2 border rounded-l"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r">
                    Send
                </button>
            </div>
        </div>
    );
}
