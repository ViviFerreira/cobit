import  NavBar  from "./components/NavBar/NavBar"
import  Footer  from "./components/Footer/Footer"
import  ButtonStart  from "./components/ButtonStart/ButtonStart"
import imgIntro from "./assets/img/imgIntro.png"
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <Outlet/>
      <div className='content'>
            <div className='intro'>
              <div>
                <h1 className="title">Aprenda sobre</h1>
                <h2 className="subTitle">COBIT 2019</h2>
              </div>
              <p className='description'>Nossa plataforma oferece uma apresentação dinâmica dos conceitos e fundamentos do COBIT 2019</p>
            </div>
            <div className='img-container'>
              <div className='imgIntro'>
                <img src={imgIntro} alt="Opss" />
                <ButtonStart/>
              </div>
            </div>
          </div>
      <Footer/>
    </div>
  );
}

export default App;
