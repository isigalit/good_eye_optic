
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About'
import Connect from './components/Connect/Connect';
import Clalit from './components/Clalit/Clalit';
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
