import  NavBar  from "./components/NavBar/NavBar"
import  Footer  from "./components/Footer/Footer"
import  ButtonStart  from "./components/ButtonStart/ButtonStart"
import imgIntro from "./assets/img/imgIntro.png"


function App() {
  return (
    <div className="container">
      <NavBar/>
          <div className='content'>
            <div className='intro'>
              <h1 className='title'>Lorem ipsum</h1>
              <p className='description'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
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
