import { TurnoContext } from '../context/turnoContext';
import { useContext } from 'react';
const cuadratura = () => {
	const { datosDelTurno } = useContext(TurnoContext);
	return <div>{datosDelTurno.bombero}</div>;
};

export default cuadratura;
