import './App.css';
import Button from './components/Button';
import { useState } from 'react';
import Pokemon, {usePokemon} from './components/Pokemon';
import { useEffect } from 'react';

function App() {
   const [totalClick, setTotalClick] = useState(0)
    const{pokemon,addPokemon}=usePokemon()
  const HandleTotalClick=()=>{
    setTotalClick(totalClick+1)
  }
  useEffect(() => {
    if (totalClick>0) {
      addPokemon()
    }
  }, [totalClick])
  
  return (
    <div className="App">
      <header className="App-header">
           {totalClick} <br/><br/>
         <Button title='this is the frist button' handleButtonTotalClick={HandleTotalClick}  />
         <Button title='this is the second button' handleButtonTotalClick={HandleTotalClick} />
         <Button title='this is the thirth button' handleButtonTotalClick={HandleTotalClick} />
         <Pokemon pokemon={pokemon}/>
      </header>
    </div>
  );
}

export default App;
