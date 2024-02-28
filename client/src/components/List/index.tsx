import React, { type MouseEventHandler } from "react";
import TodoInput from "../Input";
import TodoButton from "../Button";

interface TodoListProps {
  key?: number;
  title?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const TodoList = ({ key, title, onClick }: TodoListProps) => {
  return (
    <div className="w-1/2 h-10 border flex justify-between" key={key}>
      <TodoInput
        className="bg-whitesmoke w-4/5 text-center"
        value={title}
        disabled={true}
      />
      <TodoButton
        title="Delete"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClick}
      />
    </div>
  );
};

export default TodoList;
