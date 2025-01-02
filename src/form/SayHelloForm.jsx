const SayHelloForm = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const name = document.getElementById("input_name").value;
    const greeting = document.getElementById("greeting");
    greeting.innerHTML = `Hello ${name}`;
    alert(`Hello ${name}`);
  };
  return (
    <div>
      <form>
        <input type="text" id="input_name" />
        <button onClick={handleClick}>Say Hello</button>
      </form>
      <h1 id="greeting">Manipulation</h1>
    </div>
  );
};

export default SayHelloForm;
