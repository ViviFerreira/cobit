import React from 'react';
import { usePoints } from '../../providers/points';
import Layout from '../Layout';
import Pagination from '../Pagination';
import TitleModulo from '../TitleModulo';
import './styles.css';

function Questionario1_1({ title, q1, q2, q3, q4, up, down }) {
	const { points, setPoints, correct, incorrect, setCorrect, setIncorrect } =
		usePoints();

	const setCor = (correta) => {
		if (correta == 'True') {
			setPoints(points + 1);
		}
		setCorrect('#B5F1CC');
		setIncorrect('#F7A4A4');
	};

	return (
		<Layout>
			<div className='container'>
				<div>
					<TitleModulo>
						<span class='title-destaque'>QUESTIONÁRIO</span>
					</TitleModulo>
				</div>
				<h4 className='title-questão'>{title}</h4>

				<div className='container-questões'>
					<div
						className='questão'
						style={{ backgroundColor: q1.correta == 'True' ? correct : incorrect }}
						onClick={() => setCor(q1.correta)}
					>
						{q1.questao}
					</div>
					<div
						className='questão'
						style={{ backgroundColor: q2.correta == 'True' ? correct : incorrect }}
						onClick={() => setCor(q2.correta)}
					>
						{q2.questao}
					</div>

					<div
						className='questão'
						style={{ backgroundColor: q3.correta == 'True' ? correct : incorrect }}
						onClick={() => setCor(q3.correta)}
					>
						{q3.questao}
					</div>
					<div
						className='questão'
						style={{ backgroundColor: q4.correta == 'True' ? correct : incorrect }}
						onClick={() => setCor(q4.correta)}
					>
						{q4.questao}
					</div>
				</div>
				<Pagination up={up} down={down} />
			</div>
		</Layout>
	);
}
export default Questionario1_1;
