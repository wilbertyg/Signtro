import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./Pages/Navbar.jsx";
import './App.css'
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import Dictionary from './Pages/Dictionary'
import Profile from './Pages/Profile'
import EmptyPage from "./Pages/EmptyPage/EmptyPage.jsx";
import SubjectExercisePage from "./Pages/SubjectExercisePage/SubjectExercisePage.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar />}>
                        <Route index element={<Home />} />
                        <Route path="courses" element={<Courses />}>
                            <Route path=":courseId" element={<Courses />} />
                        </Route>
                        <Route path="exercises/">
                            <Route path=":exerciseId" element={<SubjectExercisePage />} />
                        </Route>
                        <Route path="dictionary" element={<Dictionary />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="*" element={<EmptyPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App
