import React from 'react';
import Modulo from '../../components/Modulo';
import imgMudulo1 from '../../assets/img/imgModulo1.png';

function Modulo1() {
	return (
		<Modulo
			number='1'
			subtitle='Introdução de governança e COBIT 2019'
			imgMudulo={imgMudulo1}
			up='/Mapa'
			down='/modulo1_1'
		/>
	);
}
export default Modulo1;
