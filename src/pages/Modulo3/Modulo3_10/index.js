import React from 'react';
import Layout from '../../../components/Layout';

import Pagination from '../../../components/Pagination';


import './styles.css';
import { Link } from 'react-router-dom';

function Modulo3_10() {


	return (
		<Layout>
			<div className='container'>
				<div className='contentModulo3_10'>
					<div className='apoBackgroundModulo3_10'>
                        <div className='cardModulo3_10'>
                            <p className='textApoModulo3_10'>APO 1</p>
                        </div>
                        <div className='cardModulo3_10'>
                            <p className='textApoModulo3_10'>APO 2</p>
                        </div>
                        <div className='cardModulo3_10'>
                            <p className='textApoModulo3_10'>APO 3</p>
                        </div>
                        <div className='cardModulo3_10'>
                            <p className='textApoModulo3_10'>APO 4</p>
                        </div>
                        <div className='cardModulo3_10'>
                            <p className='textApoModulo3_10'>APO 5</p>
                        </div>
                        <div className='cardModulo3_10'>
                            <p className='textApoModulo3_10'>APO 6</p>
                        </div>
                        <div className='cardModulo3_10'>
                            <p className='textApoModulo3_10'>APO 7</p>
                        </div>
                        <div className='cardModulo3_10'>
                            <p className='textApoModulo3_10'>APO 8</p>
                        </div>
                        <div className='cardModulo3_10'>
                            <p className='textApoModulo3_10'>APO 9</p>
                        </div>
                        <div className='cardModulo3_10'>
                            <p className='textApoModulo3_10'>APO 10</p>
                        </div>
                        <div className='cardModulo3_10'>
                            <p className='textApoModulo3_10'>APO 11</p>
                        </div>
                        <div className='cardModulo3_10'>
                            <p className='textApoModulo3_10'>APO 12</p>
                        </div>
                        <div className='cardModulo3_10'>
                            <p className='textApoModulo3_10'>APO 13</p>
                        </div>
                        <div className='cardModulo3_10'>
                            <p className='textApoModulo3_10'>APO 14</p>
                        </div>
                    </div>
                </div>
                <div className='contentCardModulo3_10'>
					<div className='aling-line-Modulo3_10'>
						<div className='cardInfoApo1'>
							<p>Framework de gerenciamento de TI gerenciado</p>
						</div>
						<div className='line-cardInfoApo1'></div>
					</div>
				</div>
			</div>
			<Pagination up='/Modulo3_8' down='/Modulo3_8' />
		</Layout>
	);
}
export default Modulo3_10;
