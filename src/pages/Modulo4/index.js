import React from 'react';
import Modulo from '../../components/Modulo';
import imgMudulo4 from '../../assets/img/imgModulo4.png';

function Modulo4() {
	return (
		<Modulo
			number='4'
			subtitle='Gerenciamento de desempenho'
			imgMudulo={imgMudulo4}
			up='/Maps'
			down='*'
		/>
	);
}
export default Modulo4;
