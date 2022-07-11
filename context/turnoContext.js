import { createContext } from 'react';

export const TurnoContext = createContext();

export const TurnosProvider = ({ children }) => {
	let datosDelTurno = {
		bombero: 'Benjamin',
		totalDepositado: 0,
		totalLubricantesVendidos: 0,
		dataBoletas: [],
		dataFacturas: [],
		dataVroot: [],
		dataNumerales: [
			{
				name: 'MAQUINA 1 Y 2',
				numeralInicio: 0,
				numeralFin: 0,
				litrosVenidos: 0,
			},
			{
				name: 'MAQUINA 3',
				numeralInicio: 0,
				numeralFin: 0,
				litrosVenidos: 0,
			},
			{
				name: 'MAQUINA 4 y 5',
				numeralInicio: 0,
				numeralFin: 0,
				litrosVenidos: 0,
			},
		],
		precioActual: [
			{ 93: 0, totalVendido: 0 },
			{ 95: 0, totalVendido: 0 },
			{ 97: 0, totalVendido: 0 },
			{ DI: 0, totalVendido: 0 },
		],
	};
	return (
		<TurnoContext.Provider value={{ datosDelTurno }}>
			{children}
		</TurnoContext.Provider>
	);
};
