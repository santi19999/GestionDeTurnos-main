import Create from "../../hooks/Create";
const MisDepositos = () => {
  let url = "/depositos";
  let depositos = [200000, 320000, 300000, 220000];
  let totalDepositos = () => {
    let acum = 0;
    for (let deposito of depositos) {
      acum += deposito;
    }
    return acum;
  };
  return Create(url, "Depósitos", totalDepositos());
};

export default MisDepositos;
