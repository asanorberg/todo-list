import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onRemoveClick, onDoneClick }) => {
  return (
    <div className="overflow-y-auto max-h-[calc(40rem)]">
      <ul className="todoList">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDoneClick={onDoneClick}
            onRemoveClick={onRemoveClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
