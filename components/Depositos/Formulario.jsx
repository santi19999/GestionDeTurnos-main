import { useState } from 'react';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ agregarDepositos }) => {
	let initialState = {
		nombreBombero: '',
		montoDelDeposito: '',
		fechaDelDeposito: new Date().toLocaleDateString(),
		description: '',
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setDeposito({ ...deposito, [name]: value });
	};
	const mostrarMensajes = (e, indice, texto, titulo, icono) => {
		e.target[indice].focus();
		Swal.fire({
			title: titulo,
			text: texto,
			icon: icono,
			confirmButtonText: 'Cerrar',
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		/* Checking if the input is empty or if the input is 0. */
		if (
			deposito.montoDelDeposito === '' ||
			deposito.montoDelDeposito === undefined ||
			deposito.montoDelDeposito === NaN
		) {
			mostrarMensajes(e, 0, 'No deje el campo Monto vacío', 'Error!', 'error');
			return;
		} else if (deposito.montoDelDeposito === 0) {
			mostrarMensajes(
				e,
				0,
				'No puede hacer un depósito de $0',
				'Error!',
				'error'
			);
			return;
		}

		agregarDepositos({
			nombreBombero: nombreBombero,
			montoDelDeposito: montoDelDeposito,
			fechaDelDeposito: fechaDelDeposito,
			description: description,
			id: uuidv4(),
		});
		console.log(deposito);
		mostrarMensajes(e, 0, 'Depósito Agregado', 'Éxito', 'success');
		setDeposito(initialState);
	};
	const [deposito, setDeposito] = useState(initialState);
	const { nombreBombero, montoDelDeposito, fechaDelDeposito, description } =
		deposito;
	return (
		<>
			<form onSubmit={handleSubmit} className="container">
				<select
					name="nombreBombero"
					className="form-control mb-2"
					value={nombreBombero}
					onChange={handleChange}
				>
					<option selected="selected disabled hidden">
						Seleccione un Nombre
					</option>
					<option value="Benjamín">Benjamín</option>
					<option value="Nicolás">Nicolás</option>
					<option value="Wilmer">Wilmer</option>
					<option value="Tomás">Tomás</option>
					<option value="Otro">Otro</option>
				</select>
				<input
					type="text"
					className="form-control mb-2"
					name="montoDelDeposito"
					placeholder="Ingrese el Monto del Depósito"
					value={montoDelDeposito}
					onChange={handleChange}
				/>
				<textarea
					className="form-control mb-2"
					name="description"
					placeholder="Ingrese la descripción"
					value={description}
					onChange={handleChange}
				/>

				<button className="btn btn-primary" type="submit">
					Depositar
				</button>
			</form>
		</>
	);
};

export default Formulario;
