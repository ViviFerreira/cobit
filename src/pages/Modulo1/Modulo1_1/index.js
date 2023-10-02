import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo from '../../../components/TitleModulo';
import Pagination from '../../../components/Pagination';
import imgModulo1_1 from '../../../assets/img/imgModulo1_1.png';
import './styles.css';

function Modulo1_1() {
	return (
		<Layout>
			<div className='container'>
				<TitleModulo>O que é GOVERNANÇA DE TI ?</TitleModulo>
				<div className='contentModulo1_1'>
					<div className='ListBox'>
						<p>Um conjunto de:</p>
						<div className='item-1'>
							<p>REGRAS</p>
						</div>
						<div className='item-2'>
							<p>DIRETRIZES</p>
						</div>
						<div className='item-3'>
							<p>PROCESSOS</p>
						</div>
						<div className='item-4'>
							<p>POLÍTICAS</p>
						</div>
						<div className='item-5'>
							<p>ESTRUTURAS</p>
						</div>
					</div>
					<div className='imgModulo1_1'>
						<img src={imgModulo1_1}></img>
					</div>
					<div className='cardsmodulo1_1'>
						<div className='card1modulo1_1'>
							<p>Representam também uma séria de responsabilidades</p>
						</div>
						<div className='card2modulo1_1'>
							<p>
								Garantindo que os objetivos da TI estejam alinhados com os da empresa
							</p>
						</div>
					</div>
				</div>
				<div>
					<Pagination up='/Modulo1' down='/Modulo1_2' />
				</div>
			</div>
		</Layout>
	);
}
export default Modulo1_1;
