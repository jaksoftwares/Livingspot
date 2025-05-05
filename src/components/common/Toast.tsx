"use client";
import { useState } from "react";

export function Toast({ message }: { message: string }) {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded">
      {message}
      <button className="ml-4" onClick={() => setShow(false)}>✕</button>
    </div>
  );
}
