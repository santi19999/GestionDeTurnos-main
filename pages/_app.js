import '../styles/globals.css';
import { TurnosProvider } from '../context/turnoContext';
function MyApp({ Component, pageProps }) {
	return (
		<TurnosProvider>
			<Component {...pageProps} />
		</TurnosProvider>
	);
}

export default MyApp;
