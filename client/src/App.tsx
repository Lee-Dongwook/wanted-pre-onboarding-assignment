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
    <div>
      <input
        type="text"
        value={todoTitle}
        onChange={onChangeTodoTitle}
        placeholder="input"
      />
      <button onClick={handleAddTodoList}>Add</button>
      {todoList.map((todo: List) => {
        return (
          <div key={todo.idx}>
            <strong>{todo.title}</strong>
            <button onClick={() => handleDeleteTodoList(todo.idx)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
