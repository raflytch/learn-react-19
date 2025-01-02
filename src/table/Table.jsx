import Row from "./Row";

const Table = () => {
  return (
    <>
      <table border={1}>
        <tbody>
          <Row text="Satu" id={1} />
          <Row text="Dua" id={2} />
          <Row text="Tiga" id={3} />
        </tbody>
      </table>
    </>
  );
};

export default Table;
