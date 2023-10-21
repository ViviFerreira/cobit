import React from 'react';
import Layout from '../../../components/Layout';

import Pagination from '../../../components/Pagination';

import './styles.css';
import { Link } from 'react-router-dom';

function Modulo3_10() {
	return (
		<Layout>
			<div className='containerModulo3_10'>
				<div className='contentCardModulo3_10'>
					<div className='aling-line-Modulo3_10'>
						<div className='cardInfoApo1'>
							<p>Framework de gerenciamento de TI gerenciado</p>
						</div>
						<div className='line-cardInfoApo1'></div>
					</div>
					<div className='aling-line-Modulo3_10'>
						<div className='cardInfoApo1'>
							<p>Estrategia gerenciada</p>
						</div>
						<div className='line-cardInfoApo1'></div>
					</div>
					<div className='aling-line-Modulo3_10'>
						<div className='cardInfoApo1'>
							<p>Arquitetira empresarial gerenciada</p>
						</div>
						<div className='line-cardInfoApo1'></div>
					</div>
					<div className='aling-line-Modulo3_10'>
						<div className='cardInfoApo1'>
							<p>Inovação gerenciada</p>
						</div>
						<div className='line-cardInfoApo1'></div>
					</div>
					<div className='aling-line-Modulo3_10'>
						<div className='cardInfoApo1'>
							<p>Portifolio gerenciado</p>
						</div>
						<div className='line-cardInfoApo1'></div>
					</div>
					<div className='aling-line-Modulo3_10'>
						<div className='cardInfoApo1'>
							<p>Orçamento e custos gerenciados</p>
						</div>
						<div className='line-cardInfoApo1'></div>
					</div>
					<div className='aling-line-Modulo3_10'>
						<div className='cardInfoApo1'>
							<p>Recursos humanos gerenciados</p>
						</div>
						<div className='line-cardInfoApo1'></div>
					</div>
				</div>
				<div className='contentModulo3_10'>
					<div className='cardApoBaiDssMea'>
						<Link to='/Modulo3_10' className='apoBackground'>
							<div className='cardModulo3_8'>
								<p className='textEdmModulo3_8'>APO 1</p>
							</div>
							<div className='cardModulo3_8'>
								<p className='textEdmModulo3_8'>APO 2</p>
							</div>
							<div className='cardModulo3_8'>
								<p className='textEdmModulo3_8'>APO 3</p>
							</div>
							<div className='cardModulo3_8'>
								<p className='textEdmModulo3_8'>APO 4</p>
							</div>
							<div className='cardModulo3_8'>
								<p className='textEdmModulo3_8'>APO 5</p>
							</div>
							<div className='cardModulo3_8'>
								<p className='textEdmModulo3_8'>APO 6</p>
							</div>
							<div className='cardModulo3_8'>
								<p className='textEdmModulo3_8'>APO 7</p>
							</div>
							<div className='cardModulo3_8'>
								<p className='textEdmModulo3_8'>APO 8</p>
							</div>
							<div className='cardModulo3_8'>
								<p className='textEdmModulo3_8'>APO 9</p>
							</div>
							<div className='cardModulo3_8'>
								<p className='textEdmModulo3_8'>APO 10</p>
							</div>
							<div className='cardModulo3_8'>
								<p className='textEdmModulo3_8'>APO 11</p>
							</div>
							<div className='cardModulo3_8'>
								<p className='textEdmModulo3_8'>APO 12</p>
							</div>
							<div className='cardModulo3_8'>
								<p className='textEdmModulo3_8'>APO 13</p>
							</div>
							<div className='cardModulo3_8'>
								<p className='textEdmModulo3_8'>APO 14</p>
							</div>
						</Link>
					</div>
				</div>
				<div className='contentCardModulo3_10'>
					<div className='aling-line-Modulo3_10'>
						<div className='line-cardInfoApo1'></div>
						<div className='cardInfoApo1'>
							<p>Relacionamentos gerenciados</p>
						</div>
					</div>
					<div className='aling-line-Modulo3_10'>
						<div className='line-cardInfoApo1'></div>
						<div className='cardInfoApo1'>
							<p>Acordos de serviço gerenciados</p>
						</div>
					</div>
					<div className='aling-line-Modulo3_10'>
						<div className='line-cardInfoApo1'></div>
						<div className='cardInfoApo1'>
							<p>Terceiros Gerenciados</p>
						</div>
					</div>
					<div className='aling-line-Modulo3_10'>
						<div className='line-cardInfoApo1'></div>
						<div className='cardInfoApo1'>
							<p>Qualidade gerenciada</p>
						</div>
					</div>
					<div className='aling-line-Modulo3_10'>
						<div className='line-cardInfoApo1'></div>
						<div className='cardInfoApo1'>
							<p>Risco gerenciado</p>
						</div>
					</div>
					<div className='aling-line-Modulo3_10'>
						<div className='line-cardInfoApo1'></div>
						<div className='cardInfoApo1'>
							<p>Segurança gerenciada</p>
						</div>
					</div>
					<div className='aling-line-Modulo3_10'>
						<div className='line-cardInfoApo1'></div>
						<div className='cardInfoApo1'>
							<p>Framework de gerenciamento de TI gerenciado</p>
						</div>
					</div>
				</div>
			</div>
			<Pagination up='/Modulo3_8' down='/Modulo3_8' />
		</Layout>
	);
}
export default Modulo3_10;
