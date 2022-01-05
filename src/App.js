import React from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatPage = () => {
  let { topicId } = useParams();

  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="shop/hats" element={<HatPage />} />
      </Routes>
    </div>
  );
}

export default App;
