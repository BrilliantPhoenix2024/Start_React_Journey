import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import { useState } from "react";
import { ProfileContext } from "./Context/ProfileContext";

function App() {
  const [username, setUsername] = useState("Atefeh");
  return (
    <div className="App">
      <ProfileContext.Provider value={{ username, setUsername }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </ProfileContext.Provider>
    </div>
  );
}

export default App;
