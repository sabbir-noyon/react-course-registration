import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import Aside from './Components/Aside'




function App() {

  return (
    <>
      <h1 className=" mb-14 font-bold text-center text-4xl mt-14 text-[#1C1B1B]">Course Registration</h1>
      <div className="lg:flex lg:justify-between lg:px-20">
        <Card></Card>

        <Aside></Aside>
      </div>

      
     
    </>
  )
}

export default App
