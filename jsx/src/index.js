// 1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with id root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  return <input placeholder="Hi there" />;
}

// 5) Show the component on screen
root.render(<App />);
