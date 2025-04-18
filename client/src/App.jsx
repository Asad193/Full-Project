import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header"; // <--- this is the navbar
import AppRoutes from "./routes/AppRoutes"; // your routing file

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Navbar at the top */}
      <AppRoutes /> {/* Below it, your page routes */}
    </BrowserRouter>
  );
}

export default App;
