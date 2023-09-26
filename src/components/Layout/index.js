import Header from './template/Header';
import Main from './template/Main';
import Footer from './template/Footer';
import './styles.css';

function Layout({ children }) {
	return (
		<container>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</container>
	);
}

export default Layout;
