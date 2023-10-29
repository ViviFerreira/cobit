import React from 'react';
import Layout from '../../../components/Layout';

import Pagination from '../../../components/Pagination';

import './styles.css';
import { Link } from 'react-router-dom';

function Modulo3_12() {
	return (
		<Layout>
			<div className='container containerModulo3_12'>
				<div className='contentModulo3_12'>
                    <Link to='/Modulo3_8' className='dssBackgroundModulo3_12'>
                        <div className='cardModulo3_12'>
                            <p className='textEdmModulo3_12'>DSS 1</p>
                        </div>
                        <div className='cardModulo3_12'>
                            <p className='textEdmModulo3_12'>DSS 2</p>
                        </div>
                        <div className='cardModulo3_12'>
                            <p className='textEdmModulo3_12'>DSS 3</p>
                        </div>
                        <div className='cardModulo3_12'>
                            <p className='textEdmModulo3_12'>DSS 4</p>
                        </div>
                        <div className='cardModulo3_12'>
                            <p className='textEdmModulo3_12'>DSS 5</p>
                        </div>
                        <div className='cardModulo3_12'>
                            <p className='textEdmModulo3_12'>DSS 6</p>
                        </div>
                    </Link>
				</div>
                <div className='contentCardModulo3_12'>
					<div className='aling-line-Modulo3_12'>
						<div className='line-cardInfoDss1'></div>
						<div className='cardInfoDss1'>
							<p>Operações gerenciadas</p>
						</div>
					</div>
					<div className='aling-line-Modulo3_12'>
						<div className='line-cardInfoDss1'></div>
						<div className='cardInfoDss1'>
							<p>Incidentes e requisições de serviços gerenciadas</p>
						</div>
					</div>
					<div className='aling-line-Modulo3_12'>
						<div className='line-cardInfoDss1'></div>
						<div className='cardInfoDss1'>
							<p>Problemas gerenciados</p>
						</div>
					</div>
					<div className='aling-line-Modulo3_12'>
						<div className='line-cardInfoDss1'></div>
						<div className='cardInfoDss1'>
							<p>Continuidade gerenciada</p>
						</div>
					</div>
					<div className='aling-line-Modulo3_12'>
						<div className='line-cardInfoDss1'></div>
						<div className='cardInfoDss1'>
							<p>serviços de segurança gerenciados</p>
						</div>
					</div>
					<div className='aling-line-Modulo3_12'>
						<div className='line-cardInfoDss1'></div>
						<div className='cardInfoDss1'>
							<p>Controle de processo de negocio gerenciados</p>
						</div>
					</div>
				</div>
			</div>
			<Pagination up='/Modulo3_8' down='/Modulo3_8' />
		</Layout>
	);
}
export default Modulo3_12;
