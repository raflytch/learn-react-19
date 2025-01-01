const HelloWorld = () => {
  const propsValues = {
    text: "Halo disini saya sudah kasih value di props",
  };
  return (
    <div>
      <HeaderHelloWorld {...propsValues} />
      <ParagraphHelloWorld text={"Selamat Belajar React 19"} />
    </div>
  );
};

export default HelloWorld;

const HeaderHelloWorld = ({ text = "Ups lupa kasih text di props" }) => {
  return (
    <h1 style={{ color: "red", fontSize: "50px", backgroundColor: "black" }}>
      {text.toUpperCase()}
    </h1>
  );
};

const ParagraphHelloWorld = ({ text }) => {
  const date = new Date().toLocaleDateString();

  const styleComponents = {
    color: "blue",
    fontSize: "20px",
    backgroundColor: "black",
    fontWeight: "bold",
  };
  return (
    <p style={styleComponents}>
      {text.toLowerCase()} {date}
    </p>
  );
};
