import './App.css';
import Button from './components/Button';
import { useState } from 'react';

function App() {
   const [totalClick, setTotalClick] = useState(0)

  const HandleTotalClick=()=>{
    setTotalClick(totalClick+1)
  }

  return (
    <div className="App">
      <header className="App-header">
           {totalClick} <br/><br/>
         <Button title='this is the frist button' handleButtonTotalClick={HandleTotalClick}  />
         <Button title='this is the second button' handleButtonTotalClick={HandleTotalClick} />
         <Button title='this is the thirth button' handleButtonTotalClick={HandleTotalClick} />

      </header>
    </div>
  );
}

export default App;
