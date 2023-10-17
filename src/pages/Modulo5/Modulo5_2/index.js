import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';

import { Link } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import './styles.css';

function Modulo5_2() {
	return (
		<Layout>
			<TitleModulo><span className='title-destaque'>BENEFÍCIOS</span>  do COBIT 2019</TitleModulo>
			<div className='container'>
                <div className='descriptionModulo5_2'>
                    <p>Há vários pontos positivos ao se decidir usar o COBIT 2019 como framework de governança:</p>
                </div>
                <div className='contentCardModulo5_2'>
                    <Link to="/Modulo5_1" className='iconTextMoule5_2'>
                        <div className='backgrounCardModulo5_2'>
                            <FaCheckCircle size={30} color='#fff'/>
                        </div> 
                        <div>
                            <p>Aceitação e reconhecimento global</p>
                        </div>  
                    </Link>
                </div>
                <div className='cardDescriptionModulo5_2'>
                    <p>Para começar, ele é um framework globalmente aceito e amplamente adotado por organizações de diferentes tipos, tamanhos e segmentos de negócios.</p>
                </div>
			</div>
			<Pagination up='/Modulo5_1' down='/Modulo5_1' />
		</Layout>
	);
}
export default Modulo5_2;
