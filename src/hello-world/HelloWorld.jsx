import "./HelloWorld.css";

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
  return <h1 className="title">{text.toUpperCase()}</h1>;
};

const ParagraphHelloWorld = ({ text }) => {
  const date = new Date().toLocaleDateString();

  return (
    <p className="content">
      {text.toLowerCase()} {date}
    </p>
  );
};
