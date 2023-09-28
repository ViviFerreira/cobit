import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo1_6 from '../../../components/TitleModulo1_6';
import PaginationUP from '../../../components/Pagination/PaginationUP';
import PaginationDown from '../../../components/Pagination/PaginationDown';
import { Link } from 'react-router-dom';


import './styles.css';

function Modulo1_5() {
	return (
		<Layout>
			<div className='container'>
                <TitleModulo1_6/>
                <div className='contentCardTextModulo1_5'>
                    <Link to='/Modulo1_2' className='cardModulo1_5'>
                        <div>
                            <ul>
                                <li>1. Estrutura</li>
                                <li>2. Processos</li>
                                <li>3. Operação</li>
                                <li>4. Gestão</li>
                            </ul>
                        </div>
                    </Link>
                    <div className='textModulo1_5'>
                        <p className='primaryTextModule1_5'> São estabelecidas estruturas organizacionais e processos claros para orientar a implementação e a gestão da TI. <span>Definindo papéis, responsabilidades e fluxos de trabalho.</span></p>
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
export default Modulo1_5;