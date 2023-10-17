import React from 'react';
import Modulo from '../../components/Modulo';
import imgMudulo5 from '../../assets/img/imgModulo5.png';

function Modulo5() {
	return (
		<Modulo
			number='5'
			subtitle='Benefícios do COBIT 2019'
			imgMudulo={imgMudulo5}
			up='/Mapa'
			down='/Modulo5_1'
		/>
	);
}
export default Modulo5;
