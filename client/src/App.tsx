import React, { useState, type ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store/store";
import { addTodo, deleteTodo } from "./store/todoSlice";

interface List {
  idx: number;
  title: string;
}

function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todo.todoList);
  const [todoTitle, setTodoTitle] = useState<string>("");

  const onChangeTodoTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const handleAddTodoList = () => {
    dispatch(addTodo(todoTitle));
    setTodoTitle("");
  };

  const handleDeleteTodoList = (idx: number) => {
    dispatch(deleteTodo(idx));
  };

  return (
    <div className="container mx-auto">
      <input
        className="border rounded px-4 py-2 w-1/2 text-center"
        type="text"
        value={todoTitle}
        onChange={onChangeTodoTitle}
        placeholder="input"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddTodoList}
      >
        Add
      </button>
      <br />
      {todoList.map((todo: List) => {
        return (
          <div
            className="w-1/2 h-10 border flex justify-between"
            key={todo.idx}
          >
            <input
              className="bg-whitesmoke w-4/5 text-center"
              value={todo.title}
              disabled
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleDeleteTodoList(todo.idx)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
