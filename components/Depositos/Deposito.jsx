const Deposito = (props) => {
  const { id, valor } = props.value;
  let datos = {
    id: 1,
    bombero: "Benjamín",
    hora: new Date().toLocaleTimeString(),
  };

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{datos.bombero}</td>
        <td>{datos.hora}</td>
        <td>${valor}</td>
      </tr>
      <style jsx>{`
        tr {
          padding: 8px;
          width: 100px;
          height: 40px;
          color: red;
        }
        td {
          width: 25%;
          text-align: center;
          border-bottom: 2px solid #eded;
        }
      `}</style>
    </>
  );
};

export default Deposito;
