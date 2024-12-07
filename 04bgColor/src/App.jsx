import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('pink')

  return (
    <>
      <div className=' w-full h-screen '
      style={{backgroundColor: color}}
      >
      
      <div className='fixed top-10 flex justify-center bg-[brown] inset-x-0'>
          
        <div className='rounded-lg bg-red-600 text-white my-2 mx-6 px-2 border-solid border-2 shadow-lg border-black'
        onClick={()=> setColor('red')}
        >Red</div>

<div className='rounded-lg bg-blue-600 text-white my-2 mx-6 px-2 border-solid border-2 shadow-lg border-black'
        onClick={()=> setColor('Blue')}
        >Blue</div>

<div className='rounded-lg bg-yellow-600 text-white my-2 mx-6 px-2 border-solid border-2 shadow-lg border-black'
        onClick={()=> setColor('Yellow')}
        >Yellow</div>

<div className='rounded-lg bg-green-600 text-white my-2 mx-6 px-2 border-solid border-2 shadow-lg border-black'
        onClick={()=> setColor('green')}
        >Green</div>

<div className='rounded-lg bg-black text-white my-2 mx-6 px-2 border-solid border-2 shadow-lg border-gray-500'
        onClick={()=> setColor('Black')}
        >Black</div>

      </div>

      </div>
    </>
  )
}

export default App
