import { useState } from 'react';
import './App.css'
import ToggleButton from './components/Button'
import ColorInput from './components/Input'

export interface BlockTemplate{
  time: number,
  color: string
}

function App() {

  const MassiveBlocks : BlockTemplate[] = [];
  const [colorText, setColorText] = useState("");
  return (
    <>
      <div className="block">
        <ToggleButton/>
        <ColorInput color={colorText}/>
        <div className='container container__playground'>

        </div>
      </div>
    </>
  )
}

export default App
