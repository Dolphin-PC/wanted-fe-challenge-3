import { TypeTodo, delete_todo } from "../store/todoSlice";
import css from "../css/common.module.css";
import { useDispatch } from "react-redux";

const Todo = ({ todo }: { todo: TypeTodo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    console.log(todo);
    dispatch(delete_todo(todo));
  };

  return (
    <li key={todo.key} className={[css.outline, "flex"].join(" ")}>
      <div className="w-9/12 break-words pr-4">
        <p>{todo.value}</p>
      </div>
      <div className="w-3/12">
        <button className={css.outline} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
