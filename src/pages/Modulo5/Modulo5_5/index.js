import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';

import { Link } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import './styles.css';

function Modulo5_5() {
	return (
		<Layout>
			<TitleModulo><span className='title-destaque'>BENEFÍCIOS</span>  do COBIT 2019</TitleModulo>
			<div className='container'>
                <div className='descriptionModulo5_5'>
                    <p>Há vários pontos positivos ao se decidir usar o COBIT 2019 como framework de governança:</p>
                </div>
                <div className='contentCardModulo5_5'>
                    <Link to="/Modulo5_1" className='iconTextMoule5_5'>
                        <div className='backgrounCardModulo5_5'>
                            <FaCheckCircle size={30} color='#fff'/>
                        </div> 
                        <div>
                            <p>Otimização de riscos e recursos</p>
                        </div>  
                    </Link>
                </div>
                <div className='cardDescriptionModulo5_5'>
                    <p>Demonstra a importância dos ativos de TI, visto que agregam valor aos negócios</p>
                </div>
			</div>
			<Pagination up='/Modulo5_1' down='/Modulo5_1' />
		</Layout>
	);
}
export default Modulo5_5;
