import { Routes, Route } from "react-router-dom";
import CompanyInformation from "./components/CompanyInformation";
import Home from "./Pages/Home/index";
import Admin from "./Pages/Admin/index";

function App() {
  return (
    <div>
      <CompanyInformation />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
