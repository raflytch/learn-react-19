import { useState } from "react";

const TaskForm = ({ setItemLists }) => {
  const [item, setItem] = useState("");

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setItemLists((draft) => {
      draft.push(item);
    });
    setItem("");
  };

  return (
    <div>
      <h1>Create Your Task</h1>
      <form>
        <input type="text" value={item} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default TaskForm;
