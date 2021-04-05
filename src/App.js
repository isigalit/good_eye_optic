
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Connect from './components/Connect';
import Clalit from './components/Clalit';

import 'fontsource-roboto';

import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="h-100 d-flex flex-column jutify-content-between">
      <Header />
      
     
     
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

        <Route path="/connect" exact>
          <div className="row justify-content-center ">
            <Connect />
          </div>
        </Route>

        <Route path="/clalit" exact>
          <div className="row justify-content-center ">
            <Clalit />
          </div>
        </Route>
        
        
    

      <Footer />


    </div>
  );
}

export default App;
