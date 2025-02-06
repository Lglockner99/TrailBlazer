import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";
import Login from "./pages/Login";


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App
