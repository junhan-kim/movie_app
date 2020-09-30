import React from 'react';

function Food({fav}){
  return (
    <h2>I like {fav}</h2>
  );
}

function App() {
  return (
    <div>
      <Food fav="kimchi"></Food>
      <Food fav="ramen"></Food>
    </div>
  );
}

export default App;
