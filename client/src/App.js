import React from 'react'
import { BrowserRouter as Router, Route, Routes} from  'react-router-dom';

import Home from './components/home';
import BabPort from './components/babPort';
import LionPort from './components/LiandUnPort';
import BhgPort from './components/bhgPort';
import Cv from './components/cv.js';

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
            <Route path = "/babport" element = { <BabPort/> }/>
            <Route path = "/lionport" element = { <LionPort /> }/>
            <Route path = "/bhgport" element = { <BhgPort/> }/>
            <Route path = "/cv" element = { <Cv/> }/>
          </Routes>


          </Router>
        </div>
        </ThemeProvider>
      </div>
    );
}

export default App;