import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table, Button } from "reactstrap";
import ModalComponent from "../components/Depositos/ModalComponent";
import { useState } from "react";

export default function Depositos() {
  let [modalInsertar, setModalInsertar] = useState(false);

  let defaultValue = [];

  let bomberoDeTurno = "Benjamin";
  let [depositos, setDepositos] = useState(defaultValue);
  let ultimoElemento = depositos.length;
  const totalDepositado = () => {
    let acum = 0;
    depositos.forEach((item) => {
      acum += item.valor;
    });
    return acum;
  };

  let showModal = () => {
    setModalInsertar(true);
  };

  return (
    <>
      <Container>
        <br />
        <Button color="success" onClick={showModal}>
          Hacer un Depósito
        </Button>
        <br />
        <br />
        {depositos.length == 0 ? (
          <h1>No existen Depósitos</h1>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>#️⃣Id</th>
                <th>📅Fecha</th>
                <th>👤Bombero</th>
                <th>💵Monto</th>
                <th>🖊️Acciones</th>
              </tr>
            </thead>
            <tbody>
              {depositos.map((deposito) => (
                <tr key={deposito.id}>
                  <th scope="row">{deposito.id}</th>
                  <td>{deposito.fecha}</td>
                  <td>{deposito.bombero}</td>
                  <td>${deposito.valor}</td>
                  <td>
                    <Button color="warning">✍️</Button>
                    {`  `}
                    <Button color="danger">🗑️</Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th>💰Total Depositado:</th>
                <th>💵{totalDepositado().toLocaleString()}</th>
                <th></th>
              </tr>
            </tfoot>
          </Table>
        )}
      </Container>
      <ModalComponent
        id={ultimoElemento + 1}
        bombero={bomberoDeTurno}
        modalInsertar={modalInsertar}
        setModalInsertar={setModalInsertar}
        depositos={depositos}
        setDepositos={setDepositos}
      />
    </>
  );
}

/**/
