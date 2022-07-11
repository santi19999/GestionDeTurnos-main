import Create from '../../hooks/Create';
const MisDepositos = (totalDepositado) => {
	let url = '/depositos';

	return Create(url, 'Depósitos', totalDepositado);
};

export default MisDepositos;
