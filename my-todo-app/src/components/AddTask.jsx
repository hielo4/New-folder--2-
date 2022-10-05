import { useRef } from "react";
import { addtodo } from "../redux/features/todoSlice";
import { useDispatch } from "react-redux";

function AddTask() {
  const dispatch = useDispatch();
  const addref = useRef(null);
  const handleadd = () => {
    const temp = {
      id: Date.now(),
      description: addref.current.value,
      isdone: false,
    };
    dispatch(addtodo(temp));
  };
  return (
    <div>
      <input ref={addref} type="text" />
      <button onClick={handleadd}>add task</button>
    </div>
  );
}

export default AddTask;
