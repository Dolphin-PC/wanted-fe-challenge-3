import React, { FormEvent, useState } from "react";
import css from "../css/common.module.css";
import { useDispatch } from "react-redux";
import { add_todo } from "../store/todoSlice";

const AddTodoContainer = () => {
  const [todoValue, setTodoValue] = useState<string>("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    if (todoValue !== "") {
      dispatch(add_todo(todoValue));
      setTodoValue("");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleAdd();
  };

  return (
    <form className="flex items-center justify-between p-4" onSubmit={handleSubmit}>
      <div className="w-8/12">
        <input className={css.outline} placeholder="input" value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
      </div>
      <div className="w-3/12">
        <button className={css.outline} onClick={handleAdd}>
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodoContainer;
