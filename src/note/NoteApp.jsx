import { useImmer, useImmerReducer } from "use-immer";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import { useReducer } from "react";

let id = 0;

const initialNotes = [
  { id: id++, text: "Belajar React", done: false },
  { id: id++, text: "Belajar CSS", done: false },
  { id: id++, text: "Belajar HTML", done: false },
  { id: id++, text: "Belajar Javascript", done: false },
  { id: id++, text: "Belajar TypeScript", done: false },
];

// const notesReducer = (notes, action) => {
//   switch (action.type) {
//     case "ADD_NOTE":
//       return [...notes, action.payload];
//     case "UPDATE_NOTE":
//       return notes.map((note) =>
//         note.id === action.payload.id ? action.payload : note
//       );
//     case "DELETE_NOTE":
//       return notes.filter((note) => note.id !== action.payload.id);
//     default:
//       return notes;
//   }
// };

const notesReducer = (notes, action) => {
  if (action.type === "ADD_NOTE") {
    notes.push(action.payload);
  } else if (action.type === "UPDATE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.payload.id);
    notes[index] = action.payload;
  } else if (action.type === "DELETE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.payload.id);
    notes.splice(index, 1);
  } else {
    return notes;
  }
};

const NoteApp = () => {
  //   const [notes, dispatch] = useReducer(notesReducer, initialNotes);
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  const handleAddNote = (text) => {
    dispatch({
      type: "ADD_NOTE",
      payload: { id: id++, text },
    });
  };

  const handleChangeNote = (note) => {
    dispatch({
      type: "UPDATE_NOTE",
      payload: note,
    });
  };

  const handleDeleteNote = (note) => {
    dispatch({
      type: "DELETE_NOTE",
      payload: note,
    });
  };

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
};

export default NoteApp;
