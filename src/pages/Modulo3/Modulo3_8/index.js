import React from 'react';
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import { motion } from 'framer-motion';
import './styles.css';

import { Link } from 'react-router-dom';

function Modulo3_8() {
	const fadeInFromTop = {
		initial: { y: -100, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: 100, opacity: 0 },
	};

	return (
		<Layout>
			<motion.div
				className='container'
				initial='initial'
				animate='animate'
				exit='exit'
				variants={fadeInFromTop}
			>
				<div className='contentModulo3_8'>
					<Link to='/Modulo3_9' className='edmBackground'>
						<div className='cardModulo3_8'>
							<p className='textEdmModulo3_8'>EDM 1</p>
						</div>
						<div className='cardModulo3_8'>
							<p className='textEdmModulo3_8'>EDM 2</p>
						</div>
						<div className='cardModulo3_8'>
							<p className='textEdmModulo3_8'>EDM 3</p>
						</div>
						<div className='cardModulo3_8'>
							<p className='textEdmModulo3_8'>EDM 4</p>
						</div>
						<div className='cardModulo3_8'>
							<p className='textEdmModulo3_8'>EDM 5</p>
						</div>
					</Link>
					<div className='cardApoBaiDssMea'>
						<div to='=' className='cardApoBaiDss'>
							<Link to='/Modulo3_10' className='apoBackground'>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>APO 1</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>APO 2</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>APO 3</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>APO 4</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>APO 5</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>APO 6</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>APO 7</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>APO 8</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>APO 9</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>APO 10</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>APO 11</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>APO 12</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>APO 13</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>APO 14</p>
								</div>
							</Link>
							<Link to='/Modulo3_11' className='baiBackground'>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>BAI 1</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>BAI 2</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>BAI 3</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>BAI 4</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>BAI 5</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>BAI 6</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>BAI 7</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>BAI 8</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>BAI 9</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>BAI 10</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>BAI 11</p>
								</div>
							</Link>
							<Link to='/Modulo3_12' className='dssBackground'>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>DSS 1</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>DSS 2</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>DSS 3</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>DSS 4</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>DSS 5</p>
								</div>
								<div className='cardModulo3_8'>
									<p className='textEdmModulo3_8'>DSS 6</p>
								</div>
							</Link>
						</div>
						<Link to='/Modulo3_13' className='meaBackground'>
							<div className='cardMeaModulo3_8'>
								<p className='textEdmModulo3_8'>MEA 1</p>
							</div>
							<div className='cardMeaModulo3_8'>
								<p className='textEdmModulo3_8'>MEA 2</p>
							</div>
							<div className='cardMeaModulo3_8'>
								<p className='textEdmModulo3_8'>MEA 3</p>
							</div>
							<div className='cardMeaModulo3_8'>
								<p className='textEdmModulo3_8'>MEA 4</p>
							</div>
							<div className='cardMeaModulo3_8'>
								<p className='textEdmModulo3_8'>MEA 5</p>
							</div>
						</Link>
					</div>
				</div>
			</motion.div>
			<Pagination up='/Modulo3_7' down='/Questionario3_1' />
		</Layout>
	);
}
export default Modulo3_8;
