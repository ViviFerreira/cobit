import React from 'react';
import Layout from '../../components/Layout';
import Modulo from '../../components/Modulo';
import imgMudulo4 from '../../assets/img/imgModulo4.png';

function Modulo4() {
	return (
		<Layout>
			<Modulo
				number='4'
				subtitle='Princípios do COBIT 2019'
				imgMudulo={imgMudulo4}
				up='/Maps'
				down='*'
			/>
		</Layout>
	);
}
export default Modulo4;
