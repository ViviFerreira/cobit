import React from 'react';
import Layout from '../../components/Layout';

import './styles.css';


function Privacidade() {
  

  return (
    <Layout>
      
      <h2 className='politicaPrivacidade'>Política de Privacidade</h2>
      <div className="row">
        <div className="column1">
          <h2 className='TitlePrivacidade'>Informações Coletadas</h2>
          <p className='textContentPrivadidade'>Ao se cadastrar em nossa aplicação, solicitamos algumas informações cruciais para personalizar sua experiência e garantir o pleno acesso aos nossos serviços. As informações requisitadas incluem:</p>
          <ul className='listInfoColetadas'>
            <li className='itensList'><span className='negrito'>Nome da Empresa</span>: Para personalizar interações e proporcionar uma experiência mais relevante dentro da aplicação.</li>
            <li className='itensList'><span className='negrito'>Setor da Empresa</span>: Visando adaptar nossos serviços de acordo com as necessidades específicas de diferentes setores, garantindo uma experiência mais personalizada.</li>
            <li className='itensList'><span className='negrito'>Nome do Usuário</span>: Para identificação única na plataforma, facilitando o acesso e a interação personalizada.</li>
            <li className='itensList'><span className='negrito'>Endereço de E-mail</span>: Utilizado como meio principal de comunicação e recuperação de conta, garantindo a segurança e a integridade da sua conta.</li>
            <li className='itensList'><span className='negrito'>Senha</span>: Uma camada adicional de segurança para proteger suas informações pessoais e garantir o acesso autorizado à sua conta.</li>
          </ul>
          <p className='textContentPrivadidade'>Esses dados são indispensáveis para o registro de acesso dos usuários à nossa plataforma. A coleta dessas informações tem como objetivo primordial garantir a segurança, autenticação adequada e a personalização dos serviços oferecidos. Reforçamos nosso compromisso em tratar essas informações com responsabilidade, protegendo a privacidade e a confidencialidade dos dados de nossos usuários.</p>
          <h2 className='TitlePrivacidade'>Finalidade da Coleta</h2>
          <p className='textContentPrivadidade'>As informações coletadas são empregadas para os seguintes propósitos:</p>
          <ul className='listInfoColetadas'>
            <li className='itensList'><span className='negrito'>Registro de Acesso</span>: Asseguramos a segurança da conta e registramos as atividades de login para garantir a autenticidade do usuário.</li>
            <li className='itensList'><span className='negrito'>Desempenho nas Questões</span>: Acompanhamos o número de questões acertadas ou erradas durante o uso da aplicação, proporcionando uma experiência personalizada e direcionada.</li>
            <li className='itensList'><span className='negrito'>Ranking</span>: Utilizamos os dados para criar um ranking dos usuários, destacando aqueles com melhor desempenho nas questões. Isso promove um ambiente competitivo e motivador dentro da comunidade de usuários.</li>
          </ul>
          <h2 className='TitlePrivacidade'>Acesso e Controle</h2>
          <p className='textContentPrivadidade'>Ao efetuar o cadastro, incentivamos os usuários a verificar cuidadosamente as informações fornecidas para garantir a precisão durante o registro. Após a confirmação, observe que as  informações terão restrições de alteração. Recomendamos, portanto, que os usuários revisem minuciosamente os dados antes da confirmação, uma vez que, após esse processo, não será possível realizar modificações nos dados fornecidos. Esta medida visa assegurar a integridade e a exatidão das informações associadas à sua conta.</p>
        </div>
        <div className='column2'>
          
        </div>
        <div className="column3">
        <h2 className='TitlePrivacidade'>Compartilhamento de Dados</h2>
        <p className='textContentPrivadidade'>Apenas a quantidade de acertos relacionados aos questionários será compartilhada com outras pessoas no ranking. Nessa exibição, somente o nome do usuário cadastrado e o número correspondente aos acertos serão visíveis. É crucial destacar que informações pessoais sensíveis, como:</p>
        <ul className='listInfoColetadas'>
          <li className='itensList'><span className='negrito'>Nome da Empresa</span></li>
          <li className='itensList'><span className='negrito'>Setor da Empresa</span></li>
          <li className='itensList'><span className='negrito'>Endereço de E-mail</span></li>
          <li className='itensList'><span className='negrito'>Senha</span></li>
        </ul>
        <p className='textContentPrivadidade'>Não serão compartilhadas com terceiros em nenhuma circunstância. Garantimos a confidencialidade dessas informações, priorizando a privacidade e a segurança dos nossos usuários.</p>
        <h2 className='TitlePrivacidade'>Consentimento</h2>
        <p className='textContentPrivadidade'>Ao fazer uso de nossa aplicação, queremos assegurar que os usuários compreendam e estejam de acordo com os princípios delineados nesta política de privacidade. Esse consentimento abrange a coleta, o processamento e o uso das informações fornecidas durante a utilização de nossos serviços. Ressaltamos que a leitura atenta destes termos é crucial para uma compreensão completa de como seus dados serão tratados. Se houver dúvidas ou preocupações, incentivamos os usuários a entrar em contato conosco para esclarecimentos adicionais. O uso contínuo de nossa aplicação após a revisão desta política implica na aceitação inequívoca e de acordo com as práticas de privacidade estabelecidas. Agradecemos a confiança depositada em nossa plataforma.</p>
        <h2 className='TitlePrivacidade'>Contato</h2>
        <p className='textContentPrivadidade'>Estamos dedicados a garantir a transparência e a proteção de seus dados. Se surgirem dúvidas, preocupações ou se você precisar de mais esclarecimentos sobre questões de privacidade, sinta-se à vontade para entrar em contato conosco.Você pode nos contatar pelos seguintes meios:</p>
        <ul className='listInfoColetadas'>
          <li className='itensList'>E-mail: <span className='negrito'>vivianeferreira18@aluno.fapce.edu.br</span> ou <span className='negrito'>nalberthdionisio@aluno.fapce.edu.br</span>.</li>
        </ul>
        <p className='textContentPrivadidade'>Estamos comprometidos em responder prontamente às suas perguntas e fornecer qualquer assistência necessária para garantir sua confiança e tranquilidade em relação ao tratamento de suas informações pessoais. Agradecemos sua confiança em nossa aplicação.</p>

        </div>
      </div>
    </Layout>
  );
}

export default Privacidade;
