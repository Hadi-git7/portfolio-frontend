import "./App.css";

import Dashboard from "./Dashboard/dashboard/dashboard";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./User/user";


function App() {
  return (
    <div>
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<User />} />
      <Route path="/dash" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
