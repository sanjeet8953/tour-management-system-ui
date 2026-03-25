import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AppRoutes from './routes/AppRoutes.jsx';

function App() {
  const user ={jwt:'kjdfjasasdfjlasjdf' , role:'Admin'}; // Simulated user data
  localStorage.setItem("user", JSON.stringify(user));
  return <AppRoutes />
}

export default App
