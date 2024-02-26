import React, { useState, type ChangeEvent } from "react";

interface List {
  idx: number;
  title: string;
}

function App() {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoList, setTodoList] = useState<List[]>([]);

  const onChangeTodoTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const handleAddTodoList = () => {
    try {
      const newTodoTitle = todoTitle;
      setTodoList((prevList) => [
        ...prevList,
        { idx: todoList.length, title: newTodoTitle },
      ]);
      setTodoTitle("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTodoList = (idx: number) => {
    try {
      const deleteIndex = idx;
      const updatedTodoList = todoList.filter(
        (todo) => todo.idx !== deleteIndex
      );
      setTodoList(updatedTodoList);
    } catch (error) {
      console.error(error);
    }
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
