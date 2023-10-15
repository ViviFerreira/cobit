import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';

import { Link } from 'react-router-dom';
import './styles.css';

function Modulo3_1() {
	return (
		<Layout>
			<TitleModulo>OBJETIVOS de Governança e gestão</TitleModulo>
			<div className='container'>
				<div className='descriptionModulo3_1'>
					<p>
						Os objetivos de governança e gestão no COBIT estão agrupados em cinco
						domínios que são denominados por verbos que expressam o propósito e as
						áreas de atividade desses objetivos.
					</p>
				</div>
				<div class='cardsModulo3_1'>
						<div class='card-group'>
							<Link to='/Modulo3_2'>
								<div class='cardModulo3_1 active'>EDM</div>
								<div class='line-card line-active'></div>
							</Link>
						</div>
					<div class='card-group'>
						<Link to='/Modulo3_3'>
							<div class='cardModulo3_1 active'>APO</div>
							<div class='line-card line-active'></div>
						</Link>
					</div>
					<div class='card-group'>
						<Link to='/Modulo3_4'>
							<div class='cardModulo3_1 active'>BAI</div>
							<div class='line-card line-active'></div>
						</Link>
					</div>
					<div class='card-group'>
						<Link to='/Modulo3_5'>
							<div class='cardModulo3_1 active'>DSS</div>
							<div class='line-card line-active'></div>
						</Link>
					</div>
					<div class='card-group'>
						<Link to='/Modulo3_6'>
							<div class='cardModulo3_1 active'>MEA</div>
							<div class='line-card line-active'></div>
						</Link>
					</div>
				</div>
			</div>
			<Pagination up='/Modulo3' down='/Modulo3_7' />
		</Layout>
	);
}
export default Modulo3_1;
