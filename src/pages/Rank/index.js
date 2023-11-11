import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import Layout from '../../components/Layout';

import './styles.css';

function Rank() {
  useEffect(() => {
    // Defina as opções do gráfico
    const options = {
      chart: {
        type: 'bar',
        width: '80%', 
        height: '80%' 
      },
      series: [{
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    };

    // Crie uma nova instância de ApexCharts com as opções
    const chart = new ApexCharts(document.querySelector("#chart"), options);

    // Renderize o gráfico
    chart.render();

    // Limpe o gráfico ao desmontar o componente
    return () => chart.destroy();
  }, []); // O array de dependências está vazio para garantir que o useEffect seja executado apenas uma vez no montagem do componente

  return (
    <Layout>
      {/* Adicione um elemento com o ID 'chart' para renderizar o gráfico */}
      <div id="chart"></div>
    </Layout>
  );
}

export default Rank;
