import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavigationBar from "./Components/NavigationBar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Dictionary from "./Pages/Dictionary/Dictionary.jsx";
import Error from "./Pages/Error/Error.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavigationBar />}>
                    <Route index element={<Home />} />
                    <Route path="dictionary" element={<Dictionary />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;