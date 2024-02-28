import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calendar_core from './Calend_vistaweek/Calendar_core.jsx'
import 'react-big-schedule/dist/css/style.css';
import Header from './header/Header.jsx'
function App() {


  return (
    <>
    <Header />
    <Calendar_core />
        
    </>
  )
}

export default App
