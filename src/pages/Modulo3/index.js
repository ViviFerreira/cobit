import React from 'react';
import Layout from '../../components/Layout';
import imgModulo3 from '../../assets/img/imgModulo3.png'
import { Link } from 'react-router-dom';
import PaginationUP from '../../components/Pagination/PaginationUP'
import PaginationDown from '../../components/Pagination/PaginationDown'
import './styles.css';

import { motion } from 'framer-motion';


function Modulo3() {
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
                <div className='descriptionModulo3'>
                    <h1 className='titleModulo3'>Você está na <strong className='bolder'>MÓDULO 3</strong></h1>
                    <p className='subtitleModulo3'>Objetivos de Governança e gestão</p>
                </div>
                <div className='introImg'>
                    <img className='imgModulo3' src={imgModulo3}></img>
                </div>

                <PaginationUP link='/Maps' />
				<PaginationDown link='*' />
            </motion.div>
		</Layout>
	);
}
export default Modulo3;
