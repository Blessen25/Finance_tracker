import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screens/login/login";
import { Header } from "./screens/header/header";
import Signup from "./screens/signup/signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}