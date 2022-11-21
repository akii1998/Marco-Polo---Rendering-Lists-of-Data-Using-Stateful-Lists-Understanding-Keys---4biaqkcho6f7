import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [text, setText] = useState(true);
  const handleChange = () => {
    setText(!text);
  };
  return (
    <div id="main">
      <h1 id="marco-polo">{text ? "Macro" : "Polo"}</h1>
      <button onClick={handleChange}>{text ? "Polo" : "Macro"}</button>
    </div>
  );
};

export default App;
