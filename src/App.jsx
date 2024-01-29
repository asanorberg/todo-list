import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Pay bills", done: false },
    { id: 2, title: "Wash car", done: false },
    { id: 3, title: "Do laundry", done: false },
    { id: 4, title: "Study", done: false },
  ]);

  const handleClickAdd = (title) => {
    setTodos((todos) => [
      ...todos,
      { id: todos.length + 1, title: title, done: false },
    ]);
  };

  const handleClickRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const handleClickDone = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="main-container shadow-2xl rounded-2xl flex-col">
      <h1 className="text-white text-4xl font-bold mb-8">My Todos</h1>
      <div className="space-y-6 ">
        <TodoInput onAddClick={handleClickAdd} />
        <TodoList
          todos={todos}
          onRemoveClick={handleClickRemove}
          onDoneClick={handleClickDone}
        />
      </div>
    </div>
  );
}

export default App;
