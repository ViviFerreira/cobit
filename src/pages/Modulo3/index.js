import React from 'react';
import Modulo from '../../components/Modulo';
import imgMudulo3 from '../../assets/img/imgModulo3.png';

function Modulo3() {
	return (
		<Modulo
			number='3'
			subtitle='Objetivos de Governança e gestão'
			imgMudulo={imgMudulo3}
			up='/Maps'
			down='*'
		/>
	);
}
export default Modulo3;
