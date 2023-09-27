import React from 'react';
import Layout from '../../components/Layout';
import introModulo1 from '../../assets/img/introModulo1.png'

import Pagination from '../../components/Pagination/index'

import './styles.css';


function Modulo1() {
	return (
		<Layout>
			<div className='circulo_1'></div>
			<div className='circulo_2'></div>
			<div className='circulo_3'></div>
            <div className='descriptionModulo1'>
                <h1 className='titleModulo1'>Você está na <strong className='bolder'>MÓDULO 1</strong></h1>
                <p className='subtitleModulo1'>Introdução de governança e COBIT 2019</p>
            </div>
            <div className='introImg'>
                <img className='introModulo1' src={introModulo1}></img>
            </div>
            <Pagination/>
		</Layout>
	);
}
export default Modulo1;
