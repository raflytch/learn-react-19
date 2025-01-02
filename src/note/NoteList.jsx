import Note from "./Note";
import { useContext } from "react";
import { NotesContext } from "./NoteContext";

const NoteList = () => {
  const notes = useContext(NotesContext);
  return (
    <>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </>
  );
};

export default NoteList;
