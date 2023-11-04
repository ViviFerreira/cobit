import React from 'react';
import Layout from '../../components/Layout';
import TitleModulo from '../../components/TitleModulo';


import './styles.css';

function QuestionarioTeste() {
	return (
		<Layout>
			<div className='container'>
				<div>
					<TitleModulo>
						<span class='title-destaque'>QUESTIONÁRIO</span>
					</TitleModulo>
				</div>
				<main className='quest1'>
					<div className='contentQuest1'>
						<span className='spnQtd'></span>
						<span className='question'></span>
						<div className='answers'></div>
					</div>
					<div className='finish'>
						<span></span>
						<button>Reiniciar</button>
					</div>
				</main>
                <script src='scripts.js' type='module'></script>
			</div>
		</Layout>
	);
}
export default QuestionarioTeste;
