import React, { type MouseEventHandler } from "react";

interface ButtonProps {
  title?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const TodoButton = ({ title, className, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default TodoButton;
