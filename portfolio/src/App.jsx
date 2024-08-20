import { useState } from 'react';
import './App.css'
import FlipCard from './components/flip-card/flip-card'
import { FlipContext } from './context/context';
import FlipSide from './components/flip-card/flip-side/flip-side';

function App() {
  const [flip, setFlip] = useState({
    flipped:false,
    page:''
  });

  return (
    <FlipContext.Provider value={{flip, setFlip}}>
      <div className="row justify-content-center align-items-center h-100 vw-100 position-absolute py-2">
        <div className="col-9 h-100">
          <FlipCard></FlipCard>
        </div>
      </div>
    </FlipContext.Provider>
  )
}

export default App
