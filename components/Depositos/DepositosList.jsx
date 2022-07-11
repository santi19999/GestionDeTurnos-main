import { Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import Deposito from './Deposito';
import Formulario from './Formulario';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const DepositosList = () => {
	const [depositos, setDepositos] = useState([]);
	/* Un hook que se llama cuando se monta el componente.Verifica si hay una clave depositos en
    LocalStorage y, si lo hay, establece el estado de depósito al valor de la clave de depósito
    en LocalStorage.*/
	useEffect(() => {
		//cada vez que se reenderiza el sitio web lee del local storage lo que hay
		if (localStorage.getItem('depositos')) {
			setDepositos(JSON.parse(localStorage.getItem('depositos')));
		}
	}, []);

	useEffect(() => {
		// cada vez que se edita o elimina un todo lo detecta y lo modifica en el local storage
		localStorage.setItem('depositos', JSON.stringify(depositos));
	}, [depositos]);
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
	const totalDepositado = () => {
		let acum = 0;
		depositos.forEach((item) => {
			acum += parseFloat(item.montoDelDeposito);
		});
		return acum;
	};
	return (
		<>
			<Formulario agregarDepositos={agregarDepositos} />
			<Table className="mt-4">
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
						<th>${totalDepositado()}</th>
						<th></th>
						<th></th>
					</tr>
				</tfoot>
			</Table>
		</>
	);
};

export default DepositosList;
