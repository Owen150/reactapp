import React, { Component } from 'react';
import Navbar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
    ]
  };

  //Called only once when an instance of a class is created
  constructor() {
    super();
    console.log("App-Constructor");
  }

  //Perfect place to make AJAX calls to get data from the server
  //Called after our component is rendered into the DOM
  componentDidMount() {
    console.log("App-Mounted");
  }

  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter }
      counters[index].value++;
      this.setState({ counters });
  };

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({ counters });
  };

  handleDelete = counterId => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters });
  };

  render() {
    
    console.log("App-rendered");

    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className='container'>
          <Counters
            counters = {this.state.counters}
            onReset = {this.handleReset}
            onDelete = {this.handleDelete}
            onIncrement = {this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
  
}

export default App;
