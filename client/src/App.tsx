import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./pages/Category";
import HomePage from "./pages/HomePage";
import Tag from "./pages/Tag";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tag/:id" element={<Tag />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
