import Image from 'next/image';
import { Button } from 'reactstrap';
const Lubricante = ({ lubricante, eliminarLubricante, totVendido }) => {
	const { id, nameLubricanteSeleccionado, unidadesVendidas, total } =
		lubricante;
	totVendido += total;
	return (
		<>
			<tr className="">
				<th className="col-3 align-self-center">
					{nameLubricanteSeleccionado}
				</th>
				<th className="col-2 align-self-center">{unidadesVendidas}</th>
				<th className="col-2 align-self-center">$ {total}</th>
				<th className="col-3 align-self-center">
					<Button color="danger" onClick={() => eliminarLubricante(id)}>
						🗑️
					</Button>
				</th>
			</tr>
		</>
	);
};

export default Lubricante;
