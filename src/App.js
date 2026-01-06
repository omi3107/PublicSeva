import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from "./pages/Landingpage.jsx";
import MapPage from "./pages/MapPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/map" element={<MapPage />} />
        {/* Placeholder routes for future pages */}
        <Route path="/check-status" element={<Landingpage />} />
        <Route path="/profile" element={<Landingpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
