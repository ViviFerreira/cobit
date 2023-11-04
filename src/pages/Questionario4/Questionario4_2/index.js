import React from 'react';
import Questionario from '../../../components/Questionario';
import { quiz4 } from '../../../data/quiz4';

function Questionario4_2() {
	return <Questionario perguntas={quiz4} up='/modulo4_2' down='/modulo5' />;
}
export default Questionario4_2;