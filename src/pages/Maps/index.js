import React from 'react';
import Layout from '../../components/Layout';
import ButtonMap from '../../components/ButtonMap';
import { Link } from 'react-router-dom';
import './styles.css';

import { BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill, BsFill4CircleFill, BsFill5CircleFill } from "react-icons/bs";
import { motion } from 'framer-motion';

function Maps() {
    const slideInFromRight = {
        initial: { x: '100%', opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: '100%', opacity: 0 },
    };

    return (
        <Layout>
            <motion.div
                className='container'
                initial="initial"
                animate="animate"
                exit="exit"
                variants={slideInFromRight}
            >
                <div className='cardBackground'>
                    <Link to='/Modulo1' activeClassName='is-active'>
                        <ButtonMap icon={<BsFill1CircleFill size={30} color='#FFFFFF' />} position={{ top: '10%', left: '10%' }} />
                    </Link>

                    <Link to='/Modulo2' activeClassName='is-active'>
                        <ButtonMap icon={<BsFill2CircleFill size={30} color='#FFFFFF' />} position={{ top: '10%', right: '10%' }} />
                    </Link>
                    
                    <Link to='/Modulo3' activeClassName='is-active'>
                        <ButtonMap icon={<BsFill3CircleFill size={30} color='#FFFFFF' />} position={{ bottom: '40%', left: '50%' }} />
                    </Link>

                    <Link to='/Modulo4' activeClassName='is-active'>
                        <ButtonMap icon={<BsFill4CircleFill size={30} color='#FFFFFF' />} position={{ bottom: '10%', left: "10%" }} />
                    </Link>

                    <Link to='/Modulo5' activeClassName='is-active'>
                        <ButtonMap icon={<BsFill5CircleFill size={30} color='#FFFFFF' />} position={{ bottom: '10%', right: '10%'}} />
                    </Link>
                </div>
            </motion.div>
        </Layout>
    );
}

export default Maps;
