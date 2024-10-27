import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import Dictionary from './Pages/Dictionary'
import Navbar from './Pages/Navbar'
import Profile from './Pages/Profile'
import DictionaryCamera from './Pages/DictionaryCamera'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dictionarycamera" element={<DictionaryCamera />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
