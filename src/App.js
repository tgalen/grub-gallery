import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <Body /> */}
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
