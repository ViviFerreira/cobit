import React from 'react';
import Layout from '../../../components/Layout';

import Pagination from '../../../components/Pagination';


import './styles.css';
import { Link } from 'react-router-dom';

function Modulo3_11() {


	return (
		<Layout>
			<div className='container'>
                <div className='contentCardModulo3_11'>
                    <div className='aling-line-Modulo3_11'>
                        <div className='cardInfoBai1'>
                            <p>Programas gerenciados</p>
                        </div>
                        <div className='line-cardInfoBai1'></div>
                    </div>
                    <div className='aling-line-Modulo3_11'>
                        <div className='cardInfoBai1'>
                            <p>Definição de requisito gerenciada</p>
                        </div>
                        <div className='line-cardInfoBai1'></div>
                    </div>
                    <div className='aling-line-Modulo3_11'>
                        <div className='cardInfoBai1'>
                            <p>Identificação e construção de soluções gerenciada</p>
                        </div>
                        <div className='line-cardInfoBai1'></div>
                    </div>
                    <div className='aling-line-Modulo3_11'>
                        <div className='cardInfoBai1'>
                            <p>Disponibilidade e capaciddade gerenciada</p>
                        </div>
                        <div className='line-cardInfoBai1'></div>
                    </div>
                    <div className='aling-line-Modulo3_11'>
                        <div className='cardInfoBai1'>
                            <p>Mudança organizacional gerenciada</p>
                        </div>
                        <div className='line-cardInfoBai1'></div>
                    </div>
                    <div className='aling-line-Modulo3_11'>
                        <div className='cardInfoBai1'>
                            <p>Mudanças de TI gerenciada</p>
                        </div>
                        <div className='line-cardInfoBai1'></div>
                    </div>
                    <div className='aling-line-Modulo3_11'>
                        <div className='cardInfoBai1'>
                            <p>Aceite e transição de mudança de  TI gerenciada</p>
                        </div>
                        <div className='line-cardInfoBai1'></div>
                    </div>
                </div>
                <div className='contentModulo3_11'>
                    <div className='baiBackgroundModulo3_11'>
                        <div className='cardModulo3_8'>
                            <p className='textEdmModulo3_8'>BAI 1</p>
                        </div>
                        <div className='cardModulo3_8'>
                            <p className='textEdmModulo3_8'>BAI 2</p>
                        </div>
                        <div className='cardModulo3_8'>
                            <p className='textEdmModulo3_8'>BAI 3</p>
                        </div>
                        <div className='cardModulo3_8'>
                            <p className='textEdmModulo3_8'>BAI 4</p>
                        </div>
                        <div className='cardModulo3_8'>
                            <p className='textEdmModulo3_8'>BAI 5</p>
                        </div>
                        <div className='cardModulo3_8'>
                            <p className='textEdmModulo3_8'>BAI 6</p>
                        </div>
                        <div className='cardModulo3_8'>
                            <p className='textEdmModulo3_8'>BAI 7</p>
                        </div>
                        <div className='cardModulo3_8'>
                            <p className='textEdmModulo3_8'>BAI 8</p>
                        </div>
                        <div className='cardModulo3_8'>
                            <p className='textEdmModulo3_8'>BAI 9</p>
                        </div>
                        <div className='cardModulo3_8'>
                            <p className='textEdmModulo3_8'>BAI 10</p>
                        </div>
                        <div className='cardModulo3_8'>
                            <p className='textEdmModulo3_8'>BAI 11</p>
                        </div>
                    </div>
                </div>
                <div className='contentCardModulo3_11'>
                    <div className='aling-line-Modulo3_11'>
                        <div className='line-cardInfoBai1'></div>
                        <div className='cardInfoBai1'>
                            <p>Conhecimento gerenciado</p>
                        </div>
                    </div>
                    <div className='aling-line-Modulo3_11'>
                        <div className='line-cardInfoBai1'></div>
                        <div className='cardInfoBai1'>
                            <p>Ativos gerenciados</p>
                        </div>
                    </div>
                    <div className='aling-line-Modulo3_11'>
                        <div className='line-cardInfoBai1'></div>
                        <div className='cardInfoBai1'>
                            <p>Configuração gerenciada</p>
                        </div>
                    </div>
                    <div className='aling-line-Modulo3_11'>
                        <div className='line-cardInfoBai1'></div>
                        <div className='cardInfoBai1'>
                            <p>Projetos gerenciados</p>
                        </div>
                    </div>
                </div>
			</div>
			<Pagination up='/Modulo3_8' down='/Modulo3_8' />
		</Layout>
	);
}
export default Modulo3_11;
