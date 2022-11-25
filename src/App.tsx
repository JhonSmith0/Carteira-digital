import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";

function App() {
  const nav = useNavigate();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
