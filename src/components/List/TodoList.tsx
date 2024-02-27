import css from "../../css/common.module.css";
import DeleteButton from "../DeleteButton";

const TodoList = () => {
  const todoList = [
    "list1list1list1list1llist1list1list1list1llist1list1list1list1list1list1list1list1list1list1list1list1list1list1list1list1list1list1list1list1list1list1llist1list1list1list1llist1list1list1list1list1list1list1list1list1list1list1list1list1list1list1list1list1list1list1list1list1list1llist1list1list1list1llist1list1list1list1list1list1list1list1list1list1list1list1list1list1list1list1list1list1",
    "list2",
  ];
  return (
    <div className="container p-4">
      <ul className="flex flex-col gap-2">
        {todoList.map((todo) => {
          return (
            <li className={[css.outline, "flex"].join(" ")}>
              <div className="w-9/12 break-words pr-4">
                <p>{todo}</p>
              </div>
              <div className="w-3/12">
                <DeleteButton />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
