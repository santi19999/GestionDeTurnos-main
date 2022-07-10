import { Container } from 'reactstrap';

import { useEffect } from 'react';
import DepositosList from '../components/Depositos/DepositosList';

export default function Depositos() {
	useEffect(() => {
		if (!localStorage.getItem('depositos')) {
			return <h1>No existen Depósitos</h1>;
		}
	});

	return (
		<>
			<Container>
				<DepositosList />
			</Container>
		</>
	);
}

/**/
