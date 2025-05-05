"use client";

import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputField({ label, className, ...props }: InputFieldProps) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <input
        className={`w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 ${className}`}
        {...props}
      />
    </div>
  );
}
