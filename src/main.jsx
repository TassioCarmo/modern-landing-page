// Import the React library for building user interfaces.
import React from "react";
// Import the ReactDOM client module for rendering React components into the DOM.
import ReactDOM from "react-dom/client";
// Import the main component of the application from the App.jsx file.
import App from "./App.jsx";
// Import the styles defined in the index.css file to apply to the application.
import "./index.css";
// Import BrowserRouter component from react-router-dom for handling routing in the application.
import { BrowserRouter as Router } from "react-router-dom";

// Use ReactDOM's createRoot method to create a root for the application,
// and render the application inside it.
ReactDOM.createRoot(document.getElementById("root")).render(
  // Wraps the entire application with <React.StrictMode> for highlighting potential problems in the codebase.
  <React.StrictMode>
    {/* Provides the routing functionality to the application using the BrowserRouter component. */}
    <Router>
      {/* Render the main App component, which represents the entire application. */}
      <App />
    </Router>
  </React.StrictMode>
);