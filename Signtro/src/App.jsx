import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import Dictionary from './Pages/Dictionary'
import Navbar from './Navbar'

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
