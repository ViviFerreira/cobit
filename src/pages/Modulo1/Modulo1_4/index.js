import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo1_6 from '../../../components/TitleModulo1_6';
import PaginationUP from '../../../components/Pagination/PaginationUP';
import PaginationDown from '../../../components/Pagination/PaginationDown';
 import { Link } from 'react-router-dom';


import './styles.css';

function Modulo1_4() {
	return (
		<Layout>
			<div className='container'>
                <TitleModulo1_6/>
                <div className='contentCardTextModulo1_4'>
                    <Link to='/Modulo1_2' className='cardModulo1_4'>
                        <div>
                            <ul>
                                <li>1. Decisão</li>
                                <li>2. Compromisso</li>
                                <li>3. Priorização</li>
                                <li>4. Alocação de recursos</li>
                            </ul>
                        </div>
                    </Link>
                    <div className='textModulo1_4'>
                        <p className='primaryTextModule1_4'>A fase de decisão envolve escolhas informadas <span>sobre investimentos em tecnologia e recursos</span>. Isso inclui avaliar as opções disponíveis, <span>identificar riscos e tomar decisões baseadas em dados</span> para aumentar os benefícios e diminuir os riscos</p>
                        
                    </div>
                </div>
				<div>
					<PaginationUP link='/Modulo1_2' />
					<PaginationDown link='/Modulo1_7' />
				</div>
			</div>
		</Layout>
	);
}
export default Modulo1_4;