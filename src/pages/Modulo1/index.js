import React from 'react';
import Layout from '../../components/Layout';
import introModulo1 from '../../assets/img/introModulo1.png'
import { Link } from 'react-router-dom';
import PaginationUP from '../../components/Pagination/PaginationUP'
import PaginationDown from '../../components/Pagination/PaginationDown'
import './styles.css';

import { motion } from 'framer-motion';


function Modulo1() {
	return (
		<Layout>
            <motion.div className='containerMap'
            initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
            >
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

                <Link to='/Maps'>
                    <PaginationUP/>
                </Link>
                <Link to='/Modulo1_1'>
                    <PaginationDown/>
                </Link>
            </motion.div>
		</Layout>
	);
}
export default Modulo1;
