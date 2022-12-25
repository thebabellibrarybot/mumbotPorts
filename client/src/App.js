import React from 'react'
import { BrowserRouter as Router, Route, Routes} from  'react-router-dom';

import Home from './components/home';
import Cv from './components/cv.js';
import Portfolio from './components/portfolio.js';
import LinkTree from './components/LinkTree.js';

import ThemeProvider from './context/themeProvider';
// specific themes
import './components/scss/_main.scss';
// global themes
import './styles/main.css';


function App() {

  return (
      <div className='app'>
        <ThemeProvider>
        <div className='content'>
        <Router>
          
          <Routes>
            <Route path = "/" element = {<Home/>}/>
          </Routes>


          <Routes>
            <Route path = "/mumbots/linkTree" element = { <LinkTree/> }/>
            <Route path = "/home/:id" element = { <Cv/> }/>
            <Route path = "/mumbots/portfolio" element = { <Portfolio/> }/>
          </Routes>


          </Router>
        </div>
        </ThemeProvider>
      </div>
    );
}

export default App;