const AlertButton = ({ text, message }) => {
  const handleClick = () => {
    alert(message);
  };
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

export default AlertButton;
