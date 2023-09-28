import React from 'react';
import Layout from '../../../components/Layout';
import introQuest1_1 from '../../../assets/img/introQuest1_1.png'

import PaginationUP from '../../../components/Pagination/PaginationUP'
import PaginationDown from '../../../components/Pagination/PaginationDown'
import './styles.css';


function Questionario1_2() {
	return (
		<Layout>
            <div className='container'>
                <div>
                    <div className='titleQuest'>
                        <h1>QUESTIONÁRIO</h1>   
                    </div>
                </div>
                <div className=''>
                    
                </div>
                <PaginationUP link='/Questionario1_1' />
				<PaginationDown link='/*' />
            </div>
		</Layout>
	);
}
export default Questionario1_2;
