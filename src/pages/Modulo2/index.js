import React from 'react';
import Layout from '../../components/Layout';
import introModulo2 from '../../assets/img/imgModulo2.png'
import { Link } from 'react-router-dom';
import PaginationUP from '../../components/Pagination/PaginationUP'
import PaginationDown from '../../components/Pagination/PaginationDown'
import './styles.css';

import { motion } from 'framer-motion';


function Modulo2() {
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
                <div className='descriptionModulo2'>
                    <h1 className='titleModulo2'>Você está na <strong className='bolder'>MÓDULO 2</strong></h1>
                    <p className='subtitleModulo2'>Princípios do COBIT 2019</p>
                </div>
                <div className='introImg'>
                    <img className='imgModulo2' src={introModulo2}></img>
                </div>

                <Link to='/Maps'>
                    <PaginationUP/>
                </Link>
                <Link to='*'>
                    <PaginationDown/>
                </Link>
            </motion.div>
		</Layout>
	);
}
export default Modulo2;
