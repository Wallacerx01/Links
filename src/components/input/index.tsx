import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      className="border-0 h-9 rounded-md outline-0 px-2 mb-3 bg-white"
      {...props}
    />
  );
}
