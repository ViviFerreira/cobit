import React from 'react';
import Layout from '../../components/Layout';
import ButtonStart from '../../components/ButtonStart';
import { Link } from 'react-router-dom';
import './styles.css';

function Maps() {
	return (
		<Layout>
			<div className='container'>
				<div className='cardBackground'>
						<Link to='/Modulo1' activeClassName='is-active'>Modulo 1</Link>
						<Link to='/Modulo2' activeClassName='is-active'>Modulo 2</Link>
						<Link to='/Modulo3' activeClassName='is-active'>Modulo 3</Link>
						<Link to='/Modulo4' activeClassName='is-active'>Modulo 4</Link>
						<Link to='/Modulo5' activeClassName='is-active'>Modulo 5</Link>
					<ButtonStart />
				</div>
			</div>
		</Layout>
	);
}
export default Maps;
