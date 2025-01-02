import Todo from "./Todo";

const datas = [
  { id: 1, text: "Belajar React", isCompleted: true },
  { id: 2, text: "Belajar CSS", isCompleted: false },
  { id: 3, text: "Belajar HTML", isCompleted: false },
  { id: 4, text: "Belajar Javascript", isCompleted: true },
  { id: 5, text: "Belajar TypeScript", isCompleted: true },
  { id: 6, text: "Belajar React", isCompleted: true },
  { id: 7, text: "Belajar CSS", isCompleted: false },
  { id: 8, text: "Belajar Javascript", isCompleted: true },
  { id: 9, text: "Belajar HTML", isCompleted: false },
  { id: 10, text: "Belajar TypeScript", isCompleted: true },
];

const TodoList = () => {
  return (
    <>
      <ul>
        {datas.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
