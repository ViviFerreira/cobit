import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';

function Layout({ children }) {
	return (
		<container>
			<NavBar />
			<Main>{children}</Main>
			<Footer />
		</container>
	);
}

export default Layout;
