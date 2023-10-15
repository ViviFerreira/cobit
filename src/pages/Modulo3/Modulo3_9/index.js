import React from 'react';
import Layout from '../../../components/Layout';

import Pagination from '../../../components/Pagination';


import './styles.css';
import { Link } from 'react-router-dom';

function Modulo3_9() {


	return (
		<Layout>
			<div className='container'>
				<div className='contentModulo3_9'>
					<div className='edmBackground'>
						<div className='cardModulo3_9'>
                            <Link to="Modulo3_10">
							    <p className='textEdmModulo3_9'>EDM 1</p>   
                            </Link>
						</div>
						<div className='cardModulo3_9'>
							<p className='textEdmModulo3_9'>EDM 2</p>
						</div>
						<div className='cardModulo3_9'>
							<p className='textEdmModulo3_9'>EDM 3</p>
						</div>
						<div className='cardModulo3_9'>
							<p className='textEdmModulo3_9'>EDM 4</p>
						</div>
						<div className='cardModulo3_9'>
							<p className='textEdmModulo3_9'>EDM 5</p>
						</div>
					</div>
				</div>
			</div>
			<Pagination up='/Modulo3_8' down='/Questionario3_1' />
		</Layout>
	);
}
export default Modulo3_9;
