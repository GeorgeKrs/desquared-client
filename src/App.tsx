import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/index";
import Admin from "./Pages/Admin/index";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
