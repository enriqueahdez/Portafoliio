import React from "react"
import Contact from "./Contact"
import Footer from "./Footer"
import Header from "./Header"
import Navegation from "./Navegation"
import Portafolio from "./Portafolio"
import Skillset from "./Skillset"


function App() {
  return(
    <div>
      <Header />
      <Navegation />
      <Portafolio />
      <Skillset />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
