import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import Layout from '../../components/Layout';
import { useLogin } from '../../Store/Provider';
import './styles.css';

function Rank() {
  const { alldados } = useLogin();
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (alldados.length > 0) {
      setCarregando(false);
    }
  }, [alldados]);

  useEffect(() => {
    if (!carregando) {
      renderizarGrafico(alldados);
    }
  }, [alldados, carregando]);

  const renderizarGrafico = (dados) => {
    const nomes = dados.map(usuario => usuario.usuario);
    const pontos = dados.map(usuario => usuario.pointsQuestions.reduce((acumulador, numero) => acumulador + numero, 0));

    var options = {
      series: [{
        name: 'Pontos',
        data: pontos
      }],
      chart: {
        width: '100%',
        height: '75%',
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      
      xaxis: {
        categories: nomes,
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      
      },
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => chart.destroy();
  };

  if (carregando) {
    return <div>Carregando...</div>;
  }

  return (
    <Layout>
      <h1 className='tilteRank'>Ranking de acertos dos questionários</h1>
      <div id="chart"></div>
    </Layout>
  );
}

export default Rank;
