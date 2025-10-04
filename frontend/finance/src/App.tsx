import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/login/login";
import { Header } from "./screens/header/header";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}