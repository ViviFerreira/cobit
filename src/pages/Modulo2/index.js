import React from 'react';
import Modulo from '../../components/Modulo';
import imgMudulo2 from '../../assets/img/imgModulo2.png';

function Modulo2() {
	return (
		<Modulo
			number='2'
			subtitle='Princípios do COBIT 2019'
			imgMudulo={imgMudulo2}
			up='/Mapa'
			down='/Modulo2_1'
		/>
	);
}
export default Modulo2;
