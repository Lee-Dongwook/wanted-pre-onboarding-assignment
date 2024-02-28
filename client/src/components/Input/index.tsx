import React, { type ChangeEventHandler } from "react";

interface InputProps {
  className?: string;
  type?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  disabled?: boolean;
}

const TodoInput = ({
  className,
  type,
  value,
  onChange,
  placeholder,
  disabled = false,
}: InputProps) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default TodoInput;
