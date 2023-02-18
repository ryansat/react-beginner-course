// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import counters from './components/counters'
// import Movies from './components/movies';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component{
  render()  {
    return (
        <React.Fragment>
          <Navbar />
          <main className="container">
            <Counters/>
          </main>
        </React.Fragment>
    );
  }
}

export default App;
