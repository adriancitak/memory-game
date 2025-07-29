import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/'
import Difficulty from './components/Difficulty'

function App() {

  const [difficulty, setDifficulty ] = useState(4);

  return (
    <>
      <h1 style={{marginLeft:'1rem'}}>POKEMON MEMORY GAME</h1>
      <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />
      <Cards difficulty={difficulty}/>
    </>
  )
}

export default App
