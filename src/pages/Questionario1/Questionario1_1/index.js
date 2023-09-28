import React from 'react';
import Layout from '../../../components/Layout';
import introQuest1_1 from '../../../assets/img/introQuest1_1.png'

import PaginationUP from '../../../components/Pagination/PaginationUP'
import PaginationDown from '../../../components/Pagination/PaginationDown'
import './styles.css';


function Questionario1_1() {
	return (
		<Layout>
            <div className='container'>
                <div>
                    <div className='titleQuest'>
                        <h1>QUESTIONÁRIO</h1>   
                    </div>
                    <div className='descriptionQuest'>
                        <h1>Parabéns, Você concluiu o <span>MÓDULO 1</span></h1>
                    </div>
                </div>
                <div className='imgtextQuest'>
                    <div>
                        <img className='imgQuest' src={introQuest1_1}></img>
                    </div>
                    <div className='textQuest'>
                        <p>Para vermos se você realmente entendeu elaboramos 4 questões sobre o assunto apresentado...</p>
                    </div>
                </div>
                <PaginationUP link='/Modulo1_7' />
				<PaginationDown link='/Questionario1_2' />
            </div>
		</Layout>
	);
}
export default Questionario1_1;
