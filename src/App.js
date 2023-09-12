import  NavBar  from "./components/NavBar.js"
import  Footer  from "./components/Footer.js"
import imgIntro from "./assets/img/imgIntro.png"
import { Link } from "react-router-dom";

// Icones usados
import { FaPlayCircle } from "react-icons/fa";

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
                <div className='buttonStart'>
                  <Link 
                  to="/pageError"
                  className="button"
                  activeClassName="is-active">
                    <FaPlayCircle className="FaPlayCircle" size={30} color="#fff"/>
                    Start
                  </Link>
                </div>
              </div>
            </div>
          </div>
      <Footer/>
    </div>
  );
}

export default App;
