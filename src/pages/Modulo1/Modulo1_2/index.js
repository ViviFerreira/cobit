import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo1_6 from '../../../components/TitleModulo1_6';
import PaginationUP from '../../../components/Pagination/PaginationUP';
import PaginationDown from '../../../components/Pagination/PaginationDown';
import setaModulo1_2 from '../../../assets/img/setaModulo1_2.png';

import { Link } from 'react-router-dom';
import './styles.css';

function Modulo1_2() {
	return (
		<Layout>
			<div className='container'>
                <div>
                    <TitleModulo1_6/>
                    <div>
                        <p className='descriptionModulo1_2'>A governança de TI segue um ciclo essencial denominado "Ciclo de Governança de TI", que é constituído pelas seguintes fases:</p>
                    </div>
                </div>
                <div className='contentImgCard'>
                    <div className='containerSetaModulo1_2'>
                        <img className='setaModulo1_2' src={setaModulo1_2}></img>
                    </div>
                    <div className='listCardModulo1_2'>
                        <Link to='/Modulo1_3' className='card1Modulo1_2'>
                            <div>
                                <ul>
                                    <li>1. Alinhamento estratégico</li>
                                    <li>2. Compliance</li>
                                </ul>
                            </div>
                        </Link>
                        <Link to='/Modulo1_4' className='card2Modulo1_2'>
                            <div>
                                <ul>
                                    <li>1. Decisão</li>
                                    <li>2. Compromisso</li>
                                    <li>3. Priorização</li>
                                    <li>4. Alocação de recursos</li>
                                </ul>
                            </div>
                        </Link>
                        <Link to='/Modulo1_5' className='card3Modulo1_2'>
                            <div>
                                <ul>
                                    <li>1. Estrutura</li>
                                    <li>2. Processos</li>
                                    <li>3. Operação</li>
                                    <li>4. Gestão</li>
                                </ul>
                            </div>
                        </Link>
                        <Link to='/Modulo1_6'  className='card4Modulo1_2'>
                            <div>
                                <ul>
                                    <li>1. Medição do valor e do desempenho</li>
                                </ul>
                            </div>
                        </Link>
                    </div>
                </div>
				<div>
					<PaginationUP link='/Modulo1_1' />
					<PaginationDown link='/Modulo1_7' />
				</div>
			</div>
		</Layout>
	);
}
export default Modulo1_2;