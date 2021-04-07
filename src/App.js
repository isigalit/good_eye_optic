
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import Clalit from './components/Clalit/Clalit';
import 'fontsource-roboto';

import { BrowserRouter,Route } from 'react-router-dom';


function App() {
  return (
    <div className="h-100 d-flex flex-column jutify-content-between">
      <Header />

      <BrowserRouter basename="/good_eye_optic">

          <Route path="/" exact>
            <div className="row justify-content-center ">
              <Home />
            </div>
          </Route>

          <Route path="/about" exact>
            <div className="row justify-content-center ">
              <About />
            </div>
          </Route>

          <Route path="/contact" exact>
            <div className="row justify-content-center ">
              <Contact />
            </div>
          </Route>

          <Route path="/clalit" exact>
            <div className="row justify-content-center ">
              <Clalit />
            </div>
          </Route>
        
      </BrowserRouter>
        
      <Footer />


    </div>
  );
}

export default App;
