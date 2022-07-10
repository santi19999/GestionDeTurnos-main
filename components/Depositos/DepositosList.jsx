import { Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import Deposito from './Deposito';
import Formulario from './Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const DepositosList = () => {
	const [depositos, setDepositos] = useLocalStorage('depositos', []);

	/**
	 * La función AgarDepositos toma un depósito como argumento y establece el estado de depósito en el
	 * El antiguo estado de depósito más el nuevo depósito.
	 */
	const agregarDepositos = (deposito) => {
		setDepositos((old) => [...old, deposito]);
	};

	/**
	 * Si la ID del artículo que se pasa no es igual a la ID del artículo en la matriz, manténgalo
	 * En la matriz.
	 */
	const elimimarDeposito = (id_Deposito) => {
		setDepositos((old) => old.filter((item) => item.id !== id_Deposito));
	};

	return (
		<>
			<Formulario agregarDepositos={agregarDepositos} />
			<Table>
				<thead>
					<tr>
						<th>📅Fecha</th>
						<th>👤Bombero</th>
						<th>💵Monto</th>
						<th>💡Descripcion</th>
						<th>❌Eliminar</th>
					</tr>
				</thead>
				<tbody>
					{depositos.map((item) => (
						<Deposito
							key={item.id}
							deposito={item}
							eliminarDeposito={elimimarDeposito}
						/>
					))}
				</tbody>
				<tfoot>
					<tr>
						<th>💰Total Depositado:</th>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
					</tr>
				</tfoot>
			</Table>
		</>
	);
};

export default DepositosList;
