import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
