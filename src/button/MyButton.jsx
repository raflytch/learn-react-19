const MyButton = ({ text, onClicked }) => {
  return (
    <>
      <button onClick={onClicked}>{text}</button>
    </>
  );
};

export default MyButton;
