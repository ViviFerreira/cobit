import { Outlet } from "react-router-dom";
import  NavBar  from "./components/NavBar.js"
import  Footer  from "./components/Footer.js"




function App() {
  return (
    <div className="container">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
