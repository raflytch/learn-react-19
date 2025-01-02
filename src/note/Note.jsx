import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

const Note = ({ note }) => {
  const dispatch = useContext(NotesDispatchContext);
  const [isEditing, setIsEditing] = useState(false);

  let component;

  const handleChangeText = (event) => {
    dispatch({
      type: "UPDATE_NOTE",
      payload: { ...note, text: event.target.value },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: "DELETE_NOTE",
      payload: note,
    });
  };

  const handleChangeDone = () => {
    dispatch({
      type: "UPDATE_NOTE",
      payload: { ...note, done: !note.done },
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    setIsEditing(false);
  };

  if (isEditing) {
    component = (
      <>
        <input type="text" value={note.text} onChange={handleChangeText} />
        <button onClick={handleClick}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        <p>{note.text}</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={note.done}
          onChange={handleChangeDone}
        />
        {component}
        <button onClick={handleDelete}>Delete</button>
      </label>
    </div>
  );
};

export default Note;
