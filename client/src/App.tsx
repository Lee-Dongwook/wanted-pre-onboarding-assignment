import React, { useState, type ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "./store/store";
import { addTodo, deleteTodo } from "./store/todoSlice";

import TodoInput from "./components/Input";
import TodoButton from "./components/Button";
import TodoList from "./components/List";

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
      <TodoInput
        className="border rounded px-4 py-2 w-1/2 text-center"
        type="text"
        value={todoTitle}
        onChange={onChangeTodoTitle}
        placeholder="input"
      />
      <TodoButton
        title="Add"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddTodoList}
      />
      <br />
      {todoList.map((todo: List) => {
        return (
          <TodoList
            key={todo.idx}
            title={todo.title}
            onClick={() => handleDeleteTodoList(todo.idx)}
          />
        );
      })}
    </div>
  );
}

export default App;
