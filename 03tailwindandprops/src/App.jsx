import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-500 p-5 rounded-xl text-black mb-4'>heyy it's TAILWIND</h1>

      <Card username='yash' btnText='clickMe'></Card>
      <Card></Card>
    </>
  )
}

export default App
