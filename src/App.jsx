import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isSignedIn, signedIn] = useState(false);
  return (
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard isSignedIn={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
