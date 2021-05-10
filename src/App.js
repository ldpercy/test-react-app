

//import logo from './logo.svg';
import './App.css';

import React from 'react';
import Foo from './module-foo';
import Bar from './module-bar';

function App() {

  return (
    <div className="App">
      <h1>hello react</h1>
      <p>App.js</p>
      <hr/>
      <Foo number="123"/>
      <Foo number="456"/>
      <hr/>
      <Bar />
      <hr/>
    </div>
  );

}

export default App;
