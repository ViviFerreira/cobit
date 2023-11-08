import React, { useEffect, useState } from 'react';
import { useAplication } from '../../providers/points';
import Layout from '../Layout';
import Pagination from '../Pagination';
import TitleModulo from '../TitleModulo';
import { FaStar } from 'react-icons/fa6';
import './styles.css';
import { buscar, editar } from '../../api';

function Questionario({ perguntas, up, down, indice }) {
	const [dados, setDados] = useState({});
	const [pontosAtuais, setPontosAtuais] = useState(0);
	const questions = perguntas ?? [];
	const [perguntaAtual, setPerguntaAtual] = useState(0);
	const [showPontuacao, setShowPontuacao] = useState(false);

	const { points, setPoints, completeQuestions, setCompleteQuestions } =
		useAplication();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await buscar('http://127.0.0.1:3001/points/1/');
				setDados(data);

				const key = `pointsQuestions${indice}`;
				const pontos = data[key];
				setPontosAtuais(pontos);
				setLoading(false);
			} catch (error) {
				console.error(error);
				setLoading(false);
			}
		}

		fetchData();
	}, [indice]);

	function isEmptyObject(obj) {
		return Object.keys(obj).length === 0;
	}

	function setNewPoint(indice) {
		if (indice >= 1 && indice <= 5) {
			const key = `pointsQuestions${indice}`;
			if (!isEmptyObject(dados)) {
				let dadosBanco = { ...dados };
				dadosBanco[key] = pontosAtuais;
				editar(dadosBanco, 1);
			}
		}
		return 0;
	}

	useEffect(() => {
		setNewPoint(indice);
	}, [indice, pontosAtuais]);

	if (loading) {
		return <div>Carregando...</div>;
	}

	function proximaPergunta(correta) {
		const nextQuestion = perguntaAtual + 1;

		if (correta && !completeQuestions[indice - 1]) {
			setPontosAtuais(pontosAtuais + 1);
			setPoints(points + 1);
		}
		if (nextQuestion < questions.length) {
			setPerguntaAtual(nextQuestion);
		} else {
			let arrayQuestions = completeQuestions;
			arrayQuestions[indice - 1] = true;
			setCompleteQuestions(arrayQuestions);
			setShowPontuacao(true);
		}
	}

	function getPointsQuestions() {
		if (indice >= 1 && indice <= 5) {
			const key = `pointsQuestions${indice}`;
			return dados[key];
		}
		return 0;
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
								Você conquistou + {getPointsQuestions()}
								<FaStar size={28} color='#142d64' /> nesse módulo
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
									className={`questão ${
										completeQuestions[indice - 1] == true ? 'completed' : ''
									}`}
									onClick={() => proximaPergunta(opcoesResposta.correta)}
								>
									{opcoesResposta.resposta}
								</div>
							))}
						</div>

						{completeQuestions[indice - 1] === true ? (
							<div className='alert'>
								<span>Você já respondeu a este questionário</span>
							</div>
						) : null}
					</>
				)}
				{showPontuacao ? <Pagination up={up} down={down} /> : null}
			</div>
		</Layout>
	);
}
export default Questionario;
