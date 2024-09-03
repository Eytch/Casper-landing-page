import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./Homepage";
import Download from "./Download";
import Support from "./Support";
import Tos from "./TOS";
import Privacy from "./Privacy";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/download" element={<Download />} />
        <Route path="/support" element={<Support />} />
        <Route path="/tos" element={<Tos />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
