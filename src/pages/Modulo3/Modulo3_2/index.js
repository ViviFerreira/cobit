import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';

import { motion } from 'framer-motion';
import './styles.css';
import { Link } from 'react-router-dom';

function Modulo3_2() {
	return (
		<Layout>
			<TitleModulo>
				<span className='title-destaque'>OBJETIVOS </span> de Governança e gestão
			</TitleModulo>
			<div className='container'>
				<motion.div class='cardsModulo3_2'>
					<div class='card1-group'>
						<div class='card1Modulo3_2 active'>
							<p>Evaluate, Direct and Monitor</p>
						</div>
						<div className='line'></div>
						<div class='card1Modulo3_2 active'>
							<p>Avaliar, Direcionar e Monitorar</p>
						</div>
						<div class='line-card line-active'></div>
					</div>
					<div class='card-group'>
						<Link to='/Modulo3_3'>
							<div class='card2Modulo3_2 active'>APO</div>
							<div class='line-card line-active'></div>
						</Link>
					</div>
					<div class='card-group'>
						<Link to='/Modulo3_4'>
							<div class='card3Modulo3_2 active'>BAI</div>
							<div class='line-card line-active'></div>
						</Link>
					</div>
					<div class='card-group'>
						<Link to='/Modulo3_5'>
							<div class='card4Modulo3_2 active'>DSS</div>
							<div class='line-card line-active'></div>
						</Link>
					</div>
					<div class='card-group'>
						<Link to='/Modulo3_6'>
							<div class='card5Modulo3_2 active'>MEA</div>
							<div class='line-card line-active'></div>
						</Link>
					</div>
				</motion.div>
			</div>
			<Pagination up='/Modulo3_1' down='/Modulo3_7' />
		</Layout>
	);
}
export default Modulo3_2;
