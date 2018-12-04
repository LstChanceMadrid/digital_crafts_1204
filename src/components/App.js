import React, { Component } from 'react';
import '../styles/index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header text="MORE_KITTIES" />

        <Main />
        
        <Footer />
      </div>
    );
  }
}

export default App;
