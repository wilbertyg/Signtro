import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationBar from "./Components/NavigationBar.jsx";
import Home from "./Pages/Home.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavigationBar />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;