import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isSignedIn, signedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <BrowserRouter>
      <Navbar isMobile={isMobile} />
      <Routes>
        <Route path="/dashboard" element={<Dashboard isSignedIn={true} isMobile={isMobile} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
