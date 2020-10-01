import React from 'react';

class App extends React.Component{
  state = {
    count: 0
  };
  // Do not modify a state directly.
  // The "setState" modifies a state and executes a render function.
  add = () => {
    this.setState(cur => ({ count: cur.count + 1 }));
  };
  minus = () => {
    this.setState(cur => ({ count: cur.count - 1 }));
  };
  render() { 
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
