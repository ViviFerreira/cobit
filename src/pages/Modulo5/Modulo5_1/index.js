import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';

import { Link } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import './styles.css';

function Modulo5_1() {
	return (
		<Layout>
			<TitleModulo><span className='title-destaque'>BENEFÍCIOS</span>  do COBIT 2019</TitleModulo>
			<div className='container'>
                <div className='descriptionModulo5_1'>
                    <p>Há vários pontos positivos ao se decidir usar o COBIT 2019 como framework de governança:</p>
                </div>
                <div className='contentCardModulo5_1'>
                    <Link to="/Modulo5_2" className='iconTextMoule5_1'>
                        <div className='backgrounCardModulo5_1'>
                            <FaCheckCircle size={30} color='#fff'/>
                        </div> 
                        <div>
                            <p>Aceitação e reconhecimento global</p>
                        </div>  
                    </Link>
                    <Link to="/Modulo5_3" className='iconTextMoule5_1'>
                        <div className='backgrounCardModulo5_1'>
                            <FaCheckCircle size={30} color='#fff'/>
                        </div> 
                        <div>
                            <p>Geração de valor para o negócio</p>
                        </div>  
                    </Link>
                    <Link to="/Modulo5_4" className='iconTextMoule5_1'>
                        <div className='backgrounCardModulo5_1'>
                            <FaCheckCircle size={30} color='#fff'/>
                        </div> 
                        <div>
                            <p>Visibilidade para os ativos de TI</p>
                        </div>  
                    </Link>
                    <Link to="/Modulo5_5" className='iconTextMoule5_1'>
                        <div className='backgrounCardModulo5_1'>
                            <FaCheckCircle size={30} color='#fff'/>
                        </div> 
                        <div>
                            <p>Otimização de riscos e recursos</p>
                        </div>  
                    </Link>
                    <Link to="/Modulo5_6" className='iconTextMoule5_1'>
                        <div className='backgrounCardModulo5_1'>
                            <FaCheckCircle size={30} color='#fff'/>
                        </div> 
                        <div>
                            <p>Flexibilidade</p>
                        </div>  
                    </Link>
                    <Link to="/Modulo5_7" className='iconTextMoule5_1'>
                        <div className='backgrounCardModulo5_1'>
                            <FaCheckCircle size={30} color='#fff'/>
                        </div> 
                        <div>
                            <p>Desempenho gerenciado</p>
                        </div>  
                    </Link>
                    <Link to="/Modulo5_8" className='iconTextMoule5_1'>
                        <div className='backgrounCardModulo5_1'>
                            <FaCheckCircle size={30} color='#fff'/>
                        </div> 
                        <div>
                            <p>Métodos para implementação</p>
                        </div>  
                    </Link>
                    <Link to="/Modulo5_9" className='iconTextMoule5_1'>
                        <div className='backgrounCardModulo5_1'>
                            <FaCheckCircle size={30} color='#fff'/>
                        </div> 
                        <div>
                            <p>Alinhados aos principais padrões e estruturas</p>
                        </div>  
                    </Link>
                </div>
			</div>
			<Pagination up='/Modulo5' down='/Questionario5_1' />
		</Layout>
	);
}
export default Modulo5_1;
