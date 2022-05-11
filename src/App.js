import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import About from "./components/About";
import FoodItemDetails from "./components/FoodItemDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <FoodList /> */}
        <Routes>
          <Route path="/" element={<FoodList />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<FoodItemDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
