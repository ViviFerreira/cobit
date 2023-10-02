import React from 'react';

import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination/index'
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
                <Pagination up='/Questionario1_1' down='*' />
            </div>
		</Layout>
	);
}
export default Questionario1_2;
