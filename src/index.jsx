import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { 
  NavBar,
  Home,
  About,
  DevBootCamp,
  SecBootCamp,
  MgtBootCamp,
  Blog,
  Contact,
  Footer 
} from './components/index'

ReactDOM.render(
  <Router>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/devbootcamp' element={<DevBootCamp />}/>
      <Route path='/secbootcamp' element={<SecBootCamp />}/>
      <Route path='/mgtbootcamp' element={<MgtBootCamp />}/>
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

