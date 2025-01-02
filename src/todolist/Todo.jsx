const Todo = ({ text, isCompleted, isDeleted = false }) => {
  if (isDeleted) {
    return null;
  } else {
    return (
      <li>
        {isCompleted && "✅"} {text}
      </li>
    );
  }
};

export default Todo;
