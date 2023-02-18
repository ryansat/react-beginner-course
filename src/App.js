import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import counters from './components/counters'
import Movies from './components/movies';
import Counters from './components/counters';

class App extends Component{
  render(){
    return (
      <main className="container">
        {/* <Movies/> */}
        <Counters/>
      </main>
    );
  }
}

export default App;
