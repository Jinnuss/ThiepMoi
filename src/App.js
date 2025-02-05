import './App.css';
import { Back } from './Back';
import { Front } from './Front';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/back" element={<Back />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
