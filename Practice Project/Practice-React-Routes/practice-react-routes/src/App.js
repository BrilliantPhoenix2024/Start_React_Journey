import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Navigation/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import ProductDtails from "./Pages/ProductDtails";
import Error from "./Pages/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route exact path="/products/:productId" element={<ProductDtails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
