import React from 'react';
import Questionario from '../../../components/Questionario';
import { quiz5 } from '../../../data/quiz5';

function Questionario5_2() {
	return <Questionario perguntas={quiz5} up='/modulo5_2' down='/Mapa' />;
}
export default Questionario5_2;