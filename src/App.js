import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './common/header';
import Body from './common/body';
import Footer from './common/footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <Route path="/" component={Home}></Route> */}
        <Body></Body>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
