import React, { useState } from 'react';
import { usePoints } from '../../providers/points';
import Layout from '../Layout';
import Pagination from '../Pagination';
import TitleModulo from '../TitleModulo';
import { FaStar } from 'react-icons/fa6';
import './styles.css';

function Questionario({ perguntas, up, down }) {
	const questions = perguntas ?? [];
	const [perguntaAtual, setPerguntaAtual] = useState(0);
	const [showPontuacao, setShowPontuacao] = useState(false);
	const [pontosAtuais, setPontosAtuais] = useState(0);
	const { points, setPoints } = usePoints();

	function proximaPergunta(correta) {
		const nextQuestion = perguntaAtual + 1;

		if (correta) {
			setPontosAtuais(pontosAtuais + 1);
			setPoints(points + 1 )
		}
		if (nextQuestion < questions.length) {
			setPerguntaAtual(nextQuestion);
		} else {
			setShowPontuacao(true);
		}
	}

	return (
		<Layout>
			<div className='container-perguntas'>
				<div>
					<TitleModulo>
						<span class='title-destaque'>QUESTIONÁRIO</span>
					</TitleModulo>
				</div>
				{showPontuacao ? (
					<div className='pontuacao'>
						{pontosAtuais > 0 ? (
							<span>
								Você conquistou + {pontosAtuais} <FaStar size={28} color='#142d64' /> nesse
								módulo
							</span>
						) : (
							<span>
								{pontosAtuais} <FaStar size={28} color='#142d64' /> nesse módulo
							</span>
						)}
					</div>
				) : (
					<>
						<div className='infoPerguntas'>
							<div className='contagemPerguntas'>
								<span>
									Pergunta {perguntaAtual + 1}/{questions.length}
								</span>
							</div>
							<div className='pergunta'>{questions[perguntaAtual].pergunta}</div>
						</div>
						<div className='container-questões'>
							{questions[perguntaAtual].opcoesResposta.map((opcoesResposta) => (
								<div
									className='questão'
									onClick={() => proximaPergunta(opcoesResposta.correta)}
								>
									{opcoesResposta.resposta}
								</div>
							))}
						</div>
					</>
				)}
				{showPontuacao ? <Pagination up={up} down={down} /> : null}
			</div>
		</Layout>
	);
}
export default Questionario;
