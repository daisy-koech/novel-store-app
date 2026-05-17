import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import LandingPage from "./Pages/LandingPage"; 
import NovelsPage from "./Pages/NovelsPage";
import AddNovelPage from "./Pages/AddNovelPage";
import "./App.css";
import "./index.css";
import "./Pages/LandingPage.css"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/novels" element={<NovelsPage />} />
        <Route path="/add-novel" element={<AddNovelPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;