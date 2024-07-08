import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import NavbarComponent from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop/Shop";
import WellcomeComponent from "./Components/Wellcome/Wellcome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <WellcomeComponent />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
