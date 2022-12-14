import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, BookTable, Menu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <BookTable />
    <Menu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>

);

export default App;
