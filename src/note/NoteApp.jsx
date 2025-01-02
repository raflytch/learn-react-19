import { useImmer, useImmerReducer } from "use-immer";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import { useReducer } from "react";
import { NotesContext, NotesDispatchContext } from "./NoteContext";

let id = 0;

const initialNotes = [
  { id: id++, text: "Belajar React", done: false },
  { id: id++, text: "Belajar CSS", done: false },
  { id: id++, text: "Belajar HTML", done: false },
  { id: id++, text: "Belajar Javascript", done: false },
  { id: id++, text: "Belajar TypeScript", done: false },
];

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
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  return (
    <div>
      <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
          <h1>Notes</h1>
          <NoteForm />
          <NoteList />
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </div>
  );
};

export default NoteApp;
