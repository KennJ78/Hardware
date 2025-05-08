


import React from "react";
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sales from "./pages/Sales";
import "./Sales.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;