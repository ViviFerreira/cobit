import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import { Link } from 'react-router-dom';
import './styles.css';

function Modulo1_5() {
	return (
		<Layout>
			<div className='container'>
				<TitleModulo>
					Sobre o <span class='title-destaque'>CICLO DE GOVERNANÇA DE TI</span>
				</TitleModulo>
				<div className='contentCardTextModulo1_5'>
					<Link to='/Modulo1_2' className='cardModulo1_5'>
						<div initial='initial' whileHover='hover'>
							<ul>
								<li>1. Estrutura</li>
								<li>2. Processos</li>
								<li>3. Operação</li>
								<li>4. Gestão</li>
							</ul>
						</div>
					</Link>
					<div className='textModulo1_5'>
						<p className='primaryTextModule1_5'>
							São estabelecidas estruturas organizacionais e processos claros para
							orientar a implementação e a gestão da TI.
							<span>Definindo papéis, responsabilidades e fluxos de trabalho.</span>
						</p>
					</div>
				</div>
				<div>
					<Pagination up='/Modulo1_2' down='/Modulo1_7' />
				</div>
			</div>
		</Layout>
	);
}
export default Modulo1_5;
