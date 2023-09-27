import React from 'react';
import Layout from '../../components/Layout';
import imgModulo5 from '../../assets/img/imgModulo5.png'
import { Link } from 'react-router-dom';
import PaginationUP from '../../components/Pagination/PaginationUP'
import PaginationDown from '../../components/Pagination/PaginationDown'
import './styles.css';

import { motion } from 'framer-motion';


function Modulo5() {
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
                <div className='descriptionModulo5'>
                    <h1 className='titleModulo5'>Você está na <strong className='bolder'>MÓDULO 5</strong></h1>
                    <p className='subtitleModulo5'>Benefícios do COBIT 2019</p>
                </div>
                <div className='introImg'>
                    <img className='imgModulo4' src={imgModulo5}></img>
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
export default Modulo5;
