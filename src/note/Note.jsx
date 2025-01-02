import { useState } from "react";

const Note = ({ note, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  let component;

  const handleChangeText = (event) => {
    const newNote = { ...note, text: event.target.value };
    onChange(newNote);
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

  const handleChangeDone = (event) => {
    const newNote = { ...note, done: event.target.checked };
    onChange(newNote);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={note.done}
          onChange={handleChangeDone}
        />
        {component}
        <button onClick={() => onDelete(note)}>Delete</button>
      </label>
    </div>
  );
};

export default Note;
