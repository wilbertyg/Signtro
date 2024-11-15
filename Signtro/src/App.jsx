import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationBar from "./Components/NavigationBar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Courses from "./Pages/Courses/Courses.jsx";
import Dictionary from "./Pages/Dictionary/Dictionary.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Error from "./Pages/Error/Error.jsx";
import CourseExercise from "./Pages/Course-Exercise/CourseExercise.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavigationBar />}>
                    <Route index element={<Home />} />
                    <Route path="courses">
                        <Route index element={<Courses />} />
                        <Route path="exercises" element={<CourseExercise />} />
                    </Route>
                    <Route path="dictionary" element={<Dictionary />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;