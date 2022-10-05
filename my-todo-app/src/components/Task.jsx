import { useDispatch } from "react-redux";
import { done } from "../redux/features/todoSlice";

function Task({ id, description, isdone }) {
  const dispatch = useDispatch();
  const handledone = () => {
    dispatch(done({ id: id, isdone: !isdone }));
  };
  return (
    <div>
      <input onChange={handledone} type="checkbox" checked={isdone} />
      <h2>{description}</h2>
    </div>
  );
}

export default Task;
