"use client";

import { InputHTMLAttributes } from "react";

type InputProps = {
  id: string;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ id, label, ...rest }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={id}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...rest}
      />
    </div>
  );
}
