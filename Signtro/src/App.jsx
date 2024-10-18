import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Home from './Home/'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/dictionary" element={<Dictionary />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
