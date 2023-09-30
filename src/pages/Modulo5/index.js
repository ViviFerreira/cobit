import React from 'react';
import Layout from '../../components/Layout';
import Modulo from '../../components/Modulo';
import imgMudulo5 from '../../assets/img/imgModulo5.png';

function Modulo5() {
	return (
		<Layout>
			<Modulo
				number='5'
				subtitle='Princípios do COBIT 2019'
				imgMudulo={imgMudulo5}
				up='/Maps'
				down='*'
			/>
		</Layout>
	);
}
export default Modulo5;
