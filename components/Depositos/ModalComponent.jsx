import { useRef, useState } from "react";
import { UncontrolledAlert } from "reactstrap";

import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormGroup,
  Button,
} from "reactstrap";
const ModalComponent = ({
  id,
  bombero,
  modalInsertar,
  setModalInsertar,
  depositos,
  setDepositos,
}) => {
  let refMonto = useRef(0);
  let [error, setError] = useState();
  let closeModal = () => {
    setModalInsertar(false);
  };
  let handleSubmit = () => {
    if (
      refMonto.current?.value === undefined ||
      refMonto.current?.value === "" ||
      refMonto.current?.value === 0
    ) {
      setError(true);
    }
  };
  let handleChange = (e) => {
    setMonto(e.target.value);
  };

  return (
    <>
      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Hacer Nuevo Depósito</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>Deposito:</label>
            <input
              type="disabled"
              name="idModal"
              readOnly={true}
              className="form-control"
              value={id}
            />
          </FormGroup>
          <FormGroup>
            <label>Bombero:</label>
            <input
              className="form-control mb-3"
              type="select"
              value={bombero}
              name="bombero"
              readOnly={true}
            />
          </FormGroup>
          <FormGroup>
            <label>Monto:</label>
            <input
              type="number"
              className="form-control"
              name="monto"
              value={refMonto.current?.value}
              ref={refMonto}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Depositar
          </Button>
          <Button color="danger" onClick={closeModal}>
            Cancelar
          </Button>
          {error === true ? (
            <UncontrolledAlert color="danger" fade={false}>
              <span className="alert-inner--icon">
                <i className="ni ni-like-2" />
              </span>{" "}
              <span className="alert-inner--text">
                <strong>Cuidado!</strong> Estas haciendo un depósito vacío o
                incorrecto!
              </span>
            </UncontrolledAlert>
          ) : (
            ""
          )}
          {setError(false)}
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalComponent;
