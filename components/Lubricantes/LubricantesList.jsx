import FormLubricantes from './FormLubricantes';
import { Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import Lubricante from './Lubricante';
const LubricantesList = () => {
	let urls = [
		{
			name: 'AGUA 1 LTS',
			url: '/vercel.svg',
		},
		{
			name: 'AGUA 5 LTS',
			url: '/AGUA-4l.svg',
		},
		{
			name: 'AGUA VERDE 1 LTS',
			url: '/vercel.svg',
		},
		{
			name: 'AGUA VERDE 5 LTS',
			url: '/vercel.svg',
		},
		{
			name: 'EX.TURBO 15W40 1LTS',
			url: '/vercel.svg',
		},
		{
			name: 'EX.TURBO 15W40 4LTS',
			url: '/15w40-EXTRA-TURBO-4L.png',
		},
		{
			name: '20W50 1LTS',
			url: '/vercel.svg',
		},
		{
			name: '20W50 4LTS',
			url: '/ESSENCIAL-2050-SL-4L.png',
		},
		{
			name: '10W40 1LTS',
			url: '/Tecno-1L.png',
		},
		{
			name: '10W40 4LTS',
			url: '/vercel.svg',
		},
		{
			name: '5W30 1LTS',
			url: '/vercel.svg',
		},
		{
			name: '5W30 4LTS',
			url: '/vercel.svg',
		},
		{
			name: 'GL 80W90 1LTS',
			url: '/80w90-1L.png',
		},
		{
			name: 'GL 80W90 4LTS',
			url: '/80w90-4L.png',
		},
		{
			name: 'LUBRAX ATF 1LTS',
			url: '/vercel.svg',
		},
		{
			name: 'LUBRAX ATF 4LTS',
			url: '/vercel.svg',
		},
		{
			name: 'LUBRAX 2T DE 0,5',
			url: '/Essencial-2TFC-.png',
		},
		{
			name: 'LUBRAX HD-2',
			url: '/hd-2.png',
		},
		{
			name: 'LUBRAX PC-2',
			url: '/vercel.svg',
		},
		{
			name: 'LIMPIA PARABRISA',
			url: '/vercel.svg',
		},
		{
			name: 'LÍQUIDO DE FRENO',
			url: '/vercel.svg',
		},
		{
			name: 'BIDON',
			url: '/vercel.svg',
		},
		{
			name: 'FLUA',
			url: '/FLUA-HOME.png',
		},
	];

	let buscarElemento = (name) => {
		let [elem] = urls.filter((item) => item.name === name);
		return elem.url;
	};
	const [lubricantes, setLubricantes] = useState([]);
	let totVendido = 0;

	useEffect(() => {
		if (localStorage.getItem('lubricantes')) {
			setLubricantes(JSON.parse(localStorage.getItem('lubricantes')));
		}
	}, []);
	useEffect(() => {
		localStorage.setItem('lubricantes', JSON.stringify(lubricantes));
	}, [lubricantes]);

	const agregarLubricante = (lubricante) => {
		setLubricantes((old) => [...old, lubricante]);
	};

	const eliminarLubricante = (id_Lubricante) => {
		setLubricantes((old) => old.filter((item) => item.id !== id_Lubricante));
	};

	return (
		<>
			<div className="grid">
				<article className="row">
					<section className="col-9">
						<Table className="mt-4">
							<thead>
								<tr>
									<th>🧴Lubricante</th>
									<th>🛒Unidades </th>
									<th>💰Total </th>
									<th>❌Eliminar</th>
								</tr>
							</thead>
							<tbody className="grid">
								{lubricantes.map((item) => (
									<Lubricante
										key={item.id}
										lubricante={item}
										eliminarLubricante={eliminarLubricante}
										totVendido={totVendido}
									/>
								))}
							</tbody>
							<tfoot>
								<tr>
									<th>💰Total Vendido:</th>
									<th></th>
									<th>${totVendido}</th>
									<th></th>
								</tr>
							</tfoot>
						</Table>
					</section>
					<section className="col-3">
						<FormLubricantes agregarLubricante={agregarLubricante} />
					</section>
				</article>
			</div>
		</>
	);
};

export default LubricantesList;
