import React from 'react';
import Layout from '../../components/Layout';
import Modulo from '../../components/Modulo';
import imgMudulo1 from '../../assets/img/imgModulo1.png';

function Modulo1() {
	return (
		<Modulo
			number='1'
			subtitle='Princípios do COBIT 2019'
			imgMudulo={imgMudulo1}
			up='/Maps'
			down='*'
		/>
	);
}
export default Modulo1;
