import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import Layout from '../../components/Layout';
import { useLogin } from '../../Store/Provider';
import './styles.css';

function Rank() {
	const { alldados, loading } = useLogin();

	useEffect(() => {
		if (!loading) {
			renderizarGrafico(alldados);
		}
	}, [alldados, loading]);

	const renderizarGrafico = (dados) => {
		const nomes = dados.map((usuario) => usuario.usuario);
		const pontos = dados.map((usuario) => {
			// Verifica se pointsQuestions existe e é um array
			const pointsQuestions = usuario.pointsQuestions;
			if (pointsQuestions && Array.isArray(pointsQuestions)) {
				// Usa reduce apenas se pointsQuestions é um array
				return pointsQuestions.reduce(
					(acumulador, numero) => acumulador + numero,
					0
				);
			} else {
				// Se pointsQuestions não existe ou não é um array, retorna um valor padrão
				return 0;
			}
		});

		var options = {
			series: [
				{
					name: 'Pontos',
					data: pontos,
				},
			],
			chart: {
				width: '100%',
				height: '70%',
				type: 'bar',
			},
			plotOptions: {
				bar: {
					borderRadius: 10,
					dataLabels: {
						position: 'top', // top, center, bottom
					},
				},
			},
			dataLabels: {
				enabled: true,
				offsetY: -20,
				style: {
					fontSize: '12px',
					colors: ['#142d64'],
				},
			},

			xaxis: {
				categories: nomes,
				position: 'bottom',
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
				crosshairs: {
					fill: {
						type: 'gradient',
						gradient: {
							colorFrom: '#142d64',
							colorTo: '#142d64',
							stops: [0, 100],
							opacityFrom: 0.4,
							opacityTo: 0.5,
						},
					},
				},
				tooltip: {
					enabled: true,
				},
			},
			yaxis: {
				axisBorder: {
					show: false,
				},
				axisTicks: {
					show: false,
				},
			},
		};

		var chart = new ApexCharts(document.querySelector('#chart'), options);
		chart.render();

		return () => chart.destroy();
	};

	if (loading) {
		return (
			<div className='backgroundLoading'>
				<div class='loader-circle'></div>
				<p>Carregando...</p>
			</div>
		);
	}
	return (
		<Layout>
			<h1 className='tilteRank'>Ranking de acertos dos questionários</h1>
			<div id='chart'></div>
		</Layout>
	);
}

export default Rank;
