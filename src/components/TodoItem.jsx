import React from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

const TodoItem = ({ todo, onDoneClick, onRemoveClick }) => {
  return (
    <div key={todo.id} className={todo.done ? "todo-row done" : "todo-row"}>
      <li className="m-2">
        <div className="text-lg">{todo.title}</div>
      </li>
      <div className="space-x-4 m-2 whitespace-nowrap">
        <button onClick={() => onDoneClick(todo.id)}>
          <FaCircleCheck className="icon" />
        </button>
        <button onClick={() => onRemoveClick(todo.id)}>
          {" "}
          <FaCircleXmark className="icon" />{" "}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
