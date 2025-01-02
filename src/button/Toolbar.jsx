const Toolbar = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <button onClick={onClick}>First</button>
      <button onClick={onClick}>Second</button>
    </div>
  );
};

export default Toolbar;
