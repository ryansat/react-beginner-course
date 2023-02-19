// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import counters from './components/counters'
import Movies from './components/movies';
import Counters from './components/counters';
import Navbar from './components/navbar';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)

class App extends Component{
  state = { 
      counters: [
          {id: 1, value: 0},
          {id: 2, value: 0},
          {id: 3, value: 0},
          {id: 4, value: 0},
      ]
  } 

  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const idnex = counters.indexOf(counter);
      counters[idnex] = {...counter};
      counters[idnex].value++;
      this.setState({counters});
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const idnex = counters.indexOf(counter);
    counters[idnex] = {...counter};
    counters[idnex].value--;
    this.setState({counters});
  }

  handleDelete = counterId => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters});
  };

  handleReset = () =>{
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({counters});
  }
  render()  {
    return (
        <React.Fragment>
          <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
          <main className="container">
            {/* <Counters 
              counters={this.state.counters}
              onReset={this.handleReset}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            /> */}
            <Movies/>

          </main>
        </React.Fragment>
    );
  }
}

export default App;
