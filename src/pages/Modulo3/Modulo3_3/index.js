import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';

import { Link } from 'react-router-dom';
import './styles.css';

function Modulo3_3() {
	return (
		<Layout>
			<TitleModulo>OBJETIVOS de Governança e gestão</TitleModulo>
			<div className='container'>
				<div class='cardsModulo3_3'>
					<div class='card1-group'>
						<Link to="/Modulo3_2">
							<div class='card1Modulo3_3 active'>EDM</div>
							<div class='line-card line-active'></div>
						</Link>
					</div>
					<div class='card-group'>
					<div class='card1Modulo3_3 active'><p>Align,Plan  and Organize</p></div>
                        <div className='line'></div>
						<div class='card1Modulo3_3 active'><p>Alinhar, Planejar e Organizar</p></div>
						<div class='line-card line-active'></div>
					</div>
					<div class='card-group'>
						<Link to='/Modulo3_4'>
							<div class='card3Modulo3_2 active'>BAI</div>
							<div class='line-card line-active'></div>
						</Link>
					</div>
					<div class='card-group'>
						<Link to="/Modulo3_5">
							<div class='card4Modulo3_2 active'>DSS</div>
							<div class='line-card line-active'></div>
						</Link>
					</div>
					<div class='card-group'>
						<Link to="/Modulo3_6">
							<div class='card5Modulo3_2 active'>MEA</div>
							<div class='line-card line-active'></div>
						</Link>
					</div>
				</div>
			</div>
			<Pagination up='/Modulo3_1' down='/Modulo3_7' />
		</Layout>
	);
}
export default Modulo3_3;
