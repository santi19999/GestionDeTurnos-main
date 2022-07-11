import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
const FormLubricantes = ({ agregarLubricante }) => {
	let [totalVendido, setTotalVendido] = useState(0);
	let options = [
		{
			name: 'AGUA 1 LTS',
			precio: 2190,
			unidadesVendidas: 0,
			stock: 10,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: 'AGUA 5 LTS',
			precio: 5490,
			unidadesVendidas: 0,
			stock: 6,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: 'AGUA VERDE 1 LTS',
			precio: 2990,
			unidadesVendidas: 0,
			stock: 5,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: 'AGUA VERDE 5 LTS',
			precio: 5990,
			unidadesVendidas: 0,
			stock: 0,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: 'EX.TURBO 15W40 1LTS',
			precio: 8990,
			unidadesVendidas: 0,
			stock: 5,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: 'EX.TURBO 15W40 4LTS',
			precio: 29990,
			unidadesVendidas: 0,
			stock: 0,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: '20W50 1LTS',
			precio: 9990,
			unidadesVendidas: 0,
			stock: 0,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: '20W50 4LTS',
			precio: 32990,
			unidadesVendidas: 0,
			stock: 3,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: '10W40 1LTS',
			precio: 12490,
			unidadesVendidas: 0,
			stock: 4,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: '10W40 4LTS',
			precio: 32990,
			unidadesVendidas: 0,
			stock: 1,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: '5W30 1LTS',
			precio: 16490,
			unidadesVendidas: 0,
			stock: 3,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: '5W30 4LTS',
			precio: 50990,
			unidadesVendidas: 0,
			stock: 4,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: 'GL 80W90 1LTS',
			precio: 6990,
			unidadesVendidas: 0,
			stock: 6,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: 'GL 80W90 4LTS',
			precio: 21990,
			unidadesVendidas: 0,
			stock: 3,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: 'LUBRAX ATF 1LTS',
			precio: 7990,
			unidadesVendidas: 0,
			stock: 3,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: 'LUBRAX ATF 4LTS',
			precio: 14990,
			unidadesVendidas: 0,
			stock: 0,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: 'LUBRAX 2T DE 0,5',
			precio: 3990,
			unidadesVendidas: 0,
			stock: 7,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: 'LUBRAX HD-2',
			precio: 6490,
			unidadesVendidas: 0,
			stock: 9,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: 'LUBRAX PC-2',
			precio: 5490,
			unidadesVendidas: 0,
			stock: 0,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: 'LIMPIA PARABRISA',
			precio: 1390,
			unidadesVendidas: 0,
			stock: 8,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: 'LÍQUIDO DE FRRENO',
			precio: 3590,
			unidadesVendidas: 0,
			stock: 8,
			url: '/vercel.svg',
			total: 0,
		},
		{
			name: 'BIDON',
			precio: 3590,
			unidadesVendidas: 0,
			stock: 1,
			url: '/vercel.svg',
			total: 0,
		},
	];
	let initialState = {
		nameLubricanteSeleccionado: '',
		unidadesVendidas: 0,
		total: 0,
	};
	let buscarElemento = (nombre) => {
		let [selected] = options.filter((item) => item.name === nombre);
		return selected.precio;
	};
	let handleChange = (e) => {
		const { name, value } = e.target;

		setLubricante({
			...lubricante,
			[name]: value,
		});
		if (name === 'unidadesVendidas') {
			setTotalVendido(
				buscarElemento(lubricante.nameLubricanteSeleccionado) * value
			);
		}
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
		if (lubricante.name === '') {
			mostrarMensajes(e, 0, 'No deje el campo  vacío', 'Error!', 'error');
			return;
		} else if (lubricante.unidadesVendidas === 0) {
			mostrarMensajes(
				e,
				1,
				'No se puden vender 0 lubricantes',
				'Error!',
				'error'
			);
			return;
		}
		agregarLubricante({
			nameLubricanteSeleccionado: nameLubricanteSeleccionado,
			unidadesVendidas: unidadesVendidas,
			total: totalVendido,
			id: uuidv4(),
		});
		mostrarMensajes(e, 0, 'Lubricante Vendido', 'Éxito', 'success');
		setLubricante(initialState);
		setTotalVendido(0);
	};
	let [lubricante, setLubricante] = useState(initialState);
	let { nameLubricanteSeleccionado, unidadesVendidas } = lubricante;
	return (
		<>
			<form onSubmit={handleSubmit} className="mt-4">
				<select
					name="nameLubricanteSeleccionado"
					className="form-select mb-2"
					onChange={handleChange}
				>
					{options.map((item) => (
						<option value={item.name} key={item.name} className=" mb-2">
							{item.name}
						</option>
					))}
				</select>
				<input
					type="number"
					min={1}
					max={10}
					className="form-control mb-2"
					name="unidadesVendidas"
					onChange={handleChange}
					pattern="^[0-9,$]*$"
				/>
				<div className="form-group mb-2">
					<span className="form-text">Total:</span>
					<input
						onChange={handleChange}
						className=" form-control"
						disabled={true}
						type="number"
						name="total"
						value={totalVendido}
					/>
				</div>

				<button className="btn btn-success" type="submit">
					Vender
				</button>
			</form>
		</>
	);
};

export default FormLubricantes;
