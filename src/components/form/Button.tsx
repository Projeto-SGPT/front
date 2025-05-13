"use client";

import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ type = "button", children, ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
      {...rest}
    >
      {children}
    </button>
  );
}