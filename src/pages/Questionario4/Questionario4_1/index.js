import React from 'react';
import Layout from '../../../components/Layout';
import introQuest1_1 from '../../../assets/img/introQuest1_1.png';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';
import SubTitleModulo from '../../../components/SubTitleModulo';
import './styles.css';

function Questionario4_1() {
	return (
		<Layout>
			<div className='container'>
				<div>
					<TitleModulo>
						<span class='title-destaque'>QUESTIONÁRIO</span>
					</TitleModulo>
					<div className='descriptionQuest1_1'>
						<SubTitleModulo>
							Parabéns, Você concluiu o
							<span className='title-destaque'> MÓDULO 4</span>
						</SubTitleModulo>
					</div>
				</div>
				<div className='imgtextQuest'>
					<img className='imgQuest' src={introQuest1_1} />
					<div className='textQuest'>
						Para vermos se você realmente entendeu elaboramos 4 questões sobre o
						assunto apresentado...
					</div>
				</div>
				<Pagination up='/Modulo4_2' down='/Questionario4_2' />
			</div>
		</Layout>
	);
}
export default Questionario4_1;
