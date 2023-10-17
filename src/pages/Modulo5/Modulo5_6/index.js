import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';

import { Link } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import './styles.css';

function Modulo5_6() {
	return (
		<Layout>
			<TitleModulo><span className='title-destaque'>BENEFÍCIOS</span>  do COBIT 2019</TitleModulo>
			<div className='container'>
                <div className='descriptionModulo5_6'>
                    <p>Há vários pontos positivos ao se decidir usar o COBIT 2019 como framework de governança:</p>
                </div>
                <div className='contentCardModulo5_6'>
                <Link to="/Modulo5_1" className='iconTextMoule5_6'>
                        <div className='backgrounCardModulo5_6'>
                            <FaCheckCircle size={30} color='#fff'/>
                        </div> 
                        <div>
                            <p>Flexibilidade</p>
                        </div>  
                    </Link>
                </div>
                <div className='cardDescriptionModulo5_6'>
                    <p>Demonstra a importância dos ativos de TI, visto que agregam valor aos negócios</p>
                </div>
			</div>
			<Pagination up='/Modulo5_1' down='/Modulo5_1' />
		</Layout>
	);
}
export default Modulo5_6;
