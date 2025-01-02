import { useState } from "react";

const NoteForm = ({ onAddNote }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    onAddNote(text);
    setText("");
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
