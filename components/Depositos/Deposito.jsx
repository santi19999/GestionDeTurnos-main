import { Button } from 'reactstrap';
const Deposito = ({ deposito, eliminarDeposito }) => {
	const { id, nombreBombero, montoDelDeposito, fechaDelDeposito, description } =
		deposito;

	return (
		<>
			<tr>
				<th>{fechaDelDeposito}</th>
				<th>{nombreBombero}</th>
				<th>${montoDelDeposito}</th>
				<th>{description}</th>
				<th>
					<Button color="danger" onClick={() => eliminarDeposito(id)}>
						🗑️
					</Button>
				</th>
			</tr>
			<style jsx>{``}</style>
		</>
	);
};

export default Deposito;
