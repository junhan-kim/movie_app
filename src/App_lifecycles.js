import React from 'react';

class App extends React.Component{
  constructor(props) {
    super(props);
    console.log("construct");
  }
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
  // It will be called when this component was mounted at first.
  componentDidMount(){
    console.log("mounted");
  }
  // It will be called when this component's state was updated.
  componentDidUpdate(){
    console.log("updated");
  }
  // It will be called when this component will be unmounted.
  componentWillUnmount(){
    console.log("unmounted")
  }
  render() { 
    console.log("rendering");
    return ( 
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

// export default App;
