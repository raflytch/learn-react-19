import Note from "./Note";

const NoteList = ({ notes, onChange, onDelete }) => {
  return (
    <>
      <ul>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onChange={onChange}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
};

export default NoteList;
