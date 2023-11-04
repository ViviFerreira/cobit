import React from 'react';
import Questionario from '../../../components/Questionario';
import { quiz1 } from '../../../data/quiz1';

function Questionario1_2() {
	return <Questionario perguntas={quiz1} up='/modulo1_7' down='/modulo2' />;
}
export default Questionario1_2;
