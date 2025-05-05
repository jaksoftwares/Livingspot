"use client";
interface CardProps {
    title: string;
    description: string;
  }
  
  export function Card({ title, description }: CardProps) {
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    );
  }
  