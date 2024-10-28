import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationBar from "./Components/NavigationBar.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavigationBar />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}