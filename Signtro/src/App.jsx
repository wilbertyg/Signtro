import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationBar from "./Components/NavigationBar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Courses from "./Pages/Courses/Courses.jsx";
import Dictionary from "./Pages/Dictionary/Dictionary.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Error from "./Pages/Error/Error.jsx";
import CourseExercise from "./Pages/Course-Exercise/CourseExercise.jsx";
import Simulation from "./Pages/Simulation/Simulation.jsx";

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
                    <Route path="dictionary">
                        <Route index element={<Dictionary />} />
                        <Route path="simulation" element={<Simulation />} />
                    </Route>
                    <Route path="profile" element={<Profile />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;