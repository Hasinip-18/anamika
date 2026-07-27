import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WriteLetter from "./pages/WriteLetter";
import Letters from "./pages/Letters";
import RandomLetter from "./pages/RandomLetter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<WriteLetter />} />
        <Route path="/letters" element={<Letters />} />
        <Route path="/random" element={<RandomLetter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;