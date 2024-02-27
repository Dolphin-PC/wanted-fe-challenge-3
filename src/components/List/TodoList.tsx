import { useSelector } from "react-redux";
import { TypeStore } from "../../store/store";
import Todo from "../Todo";

const TodoList = () => {
  const todoList = useSelector((state: TypeStore) => state.todo);

  return (
    <div className="container p-4">
      <ul className="flex flex-col gap-2">
        {todoList.map((todo) => (
          <Todo key={todo.key} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
