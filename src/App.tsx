import React from "react";
import Cards from "./pages/Cards";

import "./App.css";

function App() {
  window.onscroll = function () {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      alert("No more available cards");
    }
  };

  return (
    <div className="App">
      <Cards></Cards>
      <div></div>
    </div>
  );
}

export default App;
