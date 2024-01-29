import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function TodoInput({ onAddClick }) {
  const [title, setTitle] = useState("");

  const handleClickAdd = () => {
    onAddClick(title);
    setTitle("");
  };

  return (
    <div className="inputContainer space-x-4 flex items-center w-full">
      <input
        className="py-4 pl-4 placeholder:text-ph-blue"
        type="text"
        placeholder="New todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClickAdd();
          }
        }}
      />
      <button
        className="add-btn flex-col items-center justify-center rounded-full px-3 py-1 font-bold text-4xl"
        onClick={handleClickAdd}
      >
        <FaPlus className="add-icon" />
      </button>
    </div>
  );
}

export default TodoInput;
