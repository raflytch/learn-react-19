import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

const NoteForm = () => {
  const [text, setText] = useState("");
  const dispatch = useContext(NotesDispatchContext);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_NOTE",
      payload: { text },
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Add Your Notes"
        value={text}
        onChange={handleChange}
      />

      <button onClick={handleClick}>Add Note</button>
    </div>
  );
};

export default NoteForm;
