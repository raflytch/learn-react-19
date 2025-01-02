import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Task = () => {
  const [itemLists, setItemLists] = useImmer([]);

  return (
    <>
      <TaskForm setItemLists={setItemLists} />
      <TaskList items={itemLists} />
    </>
  );
};

export default Task;
