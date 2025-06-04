import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import HomePage from "./pages/HomePage";
import Tag from "./pages/Tag";
import SinglePortfolio from "./pages/SinglePortfolio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tag/:id" element={<Tag />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/portfolio/:id" element={<SinglePortfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
