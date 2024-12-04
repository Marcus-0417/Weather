import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/about";
import News from "./pages/News";


export default function App() {
  return (
    <div className="wrap">
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route> {/* 跟目錄不用寫 */}
        <Route path="/about" element={<About />}></Route>
        <Route path="/news" element={<News />}></Route>
      </Routes>


    </div>
  )
}