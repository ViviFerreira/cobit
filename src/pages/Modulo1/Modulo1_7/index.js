import React from 'react';
import Layout from '../../../components/Layout';
import imgModulo1_7 from '../../../assets/img/imgModulo1_7.png'
import PaginationUP from '../../../components/Pagination/PaginationUP';
import PaginationDown from '../../../components/Pagination/PaginationDown';


import './styles.css';

function Modulo1_7() {
	return (
		<Layout>
			<div className='container'>
                <div className='titleModulo1_7'>
					<h1>O que é <span>COBIT 2019?</span></h1>
				</div>
                <div className='contentTextImgModule1_7'>
					<div className='textExpModule1_7'>
                    	<p><span>COBIT</span> significa Control Objectives for Information and Related Technologies ou Controle Objectives for Information and Related Technologies em português</p>
                    	<p>Amplamente utilizado em organizações para ajudar a garantir a <span>eficácia, eficiência, segurança e conformidade nos processos.</span></p>
					</div>
					<div className='circulo1Modulo1_7'><p>Framework de governança</p></div>
					<div className='circulo2Modulo1_7'><p>Um guia para as organizações</p></div>
					<div className='circulo3Modulo1_7'><p>Criado pelo ISACA</p></div>
					<div className='circulo4Modulo1_7'><p>Gestão de recursos de TI</p></div>
					<div className='imgModulo1_7'>
						<img src={imgModulo1_7}></img>
					</div>
				</div>
				<div>
					<PaginationUP link='/Modulo1_2' />
					<PaginationDown link='/Questionario1_1' />
				</div>
			</div>
		</Layout>
	);
}
export default Modulo1_7;