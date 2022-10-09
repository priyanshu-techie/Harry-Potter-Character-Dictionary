import './App.css';
import Heading from './header/headimg'
import Nav from './header/headnav'
import CharCard from './body/char_card';
import { useState } from 'react';

function App() {
  let [currentIndex,setIndex]=useState(0);
  return (
    <div className="App">
      <Heading/>
      <Nav changeInFunc={setIndex}/>
      <CharCard currentIndex={currentIndex}/>
    </div>
  );
}

export default App;
