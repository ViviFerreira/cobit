import React from 'react';
import Layout from '../../components/Layout';
import Modulo from '../../components/Modulo';
import imgMudulo3 from '../../assets/img/imgModulo3.png';

function Modulo3() {
	return (
		<Layout>
			<Modulo
				number='3'
				subtitle='Princípios do COBIT 2019'
				imgMudulo={imgMudulo3}
				up='/Maps'
				down='*'
			/>
		</Layout>
	);
}
export default Modulo3;
