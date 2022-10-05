import { useSelector } from "react-redux";
import Task from "./Task";

function ListTask() {
  const todolist = useSelector((state) => state.todo);

  return (
    <div>
      <ul>
        {todolist.map((t, i) => (
          <li key={i}>
            <Task
              description={t.description}
              id={t.id}
              isdone={t.isdone}
            ></Task>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTask;
