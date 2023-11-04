import React from 'react';
import Questionario from '../../../components/Questionario';
import { quiz2 } from '../../../data/quiz2';

function Questionario2_2() {
	return <Questionario perguntas={quiz2} up='/modulo2_1' down='/modulo3' />;
}
export default Questionario2_2;
