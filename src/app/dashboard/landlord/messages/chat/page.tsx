// app/dashboard/landlord/messages/chat/page.tsx
import { Suspense } from "react";
import ChatInterface from "./chatInterface";

export default function ChatPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatInterface />
    </Suspense>
  );
}