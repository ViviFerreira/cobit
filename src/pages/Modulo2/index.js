import React from 'react';
import Layout from '../../components/Layout';
import Modulo from '../../components/Modulo';
import imgMudulo2 from '../../assets/img/imgModulo2.png';

function Modulo2() {
	return (
		<Modulo
			number='2'
			subtitle='Princípios do COBIT 2019'
			imgMudulo={imgMudulo2}
			up='/Maps'
			down='*'
		/>
	);
}
export default Modulo2;
