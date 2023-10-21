import React from 'react';
import Layout from '../../../components/Layout';

import Pagination from '../../../components/Pagination';

import './styles.css';
import { Link } from 'react-router-dom';

function Modulo3_9() {
	return (
		<Layout>
			<div className='containerModulo3_9'>
				<div className='contentModulo3_8'>
					<div className='edmBackground'>
						<div className='cardModulo3_8'>
							<p className='textEdmModulo3_8'>EDM 1</p>
						</div>
						<div className='cardModulo3_8'>
							<p className='textEdmModulo3_8'>EDM 2</p>
						</div>
						<div className='cardModulo3_8'>
							<p className='textEdmModulo3_8'>EDM 3</p>
						</div>
						<div className='cardModulo3_8'>
							<p className='textEdmModulo3_8'>EDM 4</p>
						</div>
						<div className='cardModulo3_8'>
							<p className='textEdmModulo3_8'>EDM 5</p>
						</div>
					</div>
				</div>
				<div className='contentCardModulo3_9'>
					<div className='aling-line-Modulo3_9'>
						<div className='line-cardInfoEdm1'></div>
						<div className='cardInfoEdm1'>
							<p>Definição e manutenção de um framework de governança assegurada</p>
						</div>
					</div>
					<div className='aling-line-Modulo3_9'>
						<div className='line-cardInfoEdm1'></div>
						<div className='cardInfoEdm1'>
							<p>Entrega de benefícios assegurada</p>
						</div>
					</div>
					<div className='aling-line-Modulo3_9'>
						<div className='line-cardInfoEdm1'></div>
						<div className='cardInfoEdm1'>
							<p>Otimização de riscos assegurada</p>
						</div>
					</div>
					<div className='aling-line-Modulo3_9'>
						<div className='line-cardInfoEdm1'></div>
						<div className='cardInfoEdm1'>
							<p>Otimização de recursos assegurada</p>
						</div>
					</div>
					<div className='aling-line-Modulo3_9'>
						<div className='line-cardInfoEdm1'></div>
						<div className='cardInfoEdm1'>
							<p>Engajamento com as partes assegurado</p>
						</div>
					</div>
				</div>
			</div>
			<Pagination up='/Modulo3_8' down='/Modulo3_8' />
		</Layout>
	);
}
export default Modulo3_9;
