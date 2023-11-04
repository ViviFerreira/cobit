import React from 'react';
import Questionario from '../../../components/Questionario';
import { quiz3 } from '../../../data/quiz3';

function Questionario3_2() {
	return <Questionario perguntas={quiz3} up='/modulo3_1' down='/modulo4' />;
}
export default Questionario3_2;