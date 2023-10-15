import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import TitleModulo from '../../../components/TitleModulo';

import { motion } from 'framer-motion';
import './styles.css';

function Modulo3_1() {
	const fadeInFromTop = {
		initial: { y: -100, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: 100, opacity: 0 },
	};

	return (
		<Layout>
			<TitleModulo>OBJETIVOS de Governança e gestão</TitleModulo>
			<motion.div
				className='container'
				initial="initial"
				animate="animate"
				exit="exit"
				variants={fadeInFromTop}
			>
                <div className='descriptionModulo3_1'>
                    <p>Os objetivos de governança e gestão no COBIT estão agrupados em cinco domínios que são denominados por verbos que expressam o propósito e as áreas de atividade desses objetivos.</p>
                </div>
                <div>
                    <div>
                        card
                    </div>
                    <div>
                        card
                    </div>
                    <div>
                        card
                    </div>
                    <div>
                        card
                    </div>
                    <div>
                        card
                    </div>
                </div>

			</motion.div>
			<Pagination up='/Modulo3' down='/Modulo1_2' />
		</Layout>
	);
}
export default Modulo3_1;
