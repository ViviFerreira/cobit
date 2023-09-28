import React from 'react';
import Layout from '../../../components/Layout';
import TitleModulo1_6 from '../../../components/TitleModulo1_6';
import PaginationUP from '../../../components/Pagination/PaginationUP';
import PaginationDown from '../../../components/Pagination/PaginationDown';
 import { Link } from 'react-router-dom';


import './styles.css';

function Modulo1_3() {
	return (
		<Layout>
			<div className='container'>
                <TitleModulo1_6/>
                <div className='contentCardTextModulo1_3'>
                    <Link to='/Modulo1_2' className='cardModulo1_3'>
                        <div>
                            <ul>
                                <li>1. Alinhamento estratégico</li>
                                <li>2. Compliance</li>
                            </ul>
                        </div>
                    </Link>
                    <div className='textModulo1_3'>
                        <p className='primaryTextModule1_3'> O ponto de partida primordial é assegurar que as iniciativas e os cronogramas dos projetos de TI <span>estejam completamente alinhados com as decisões estratégicas da empresa.</span></p>
                        <p className='secondaryTextModule1_3'>Identificar os objetivos de negócios e como a TI pode apoiar esses objetivos, seja através da melhoria de processos, desenvolvimento de produtos ou expansão de serviços.</p>
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
export default Modulo1_3;