import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { TaskOne, TaskTwo, TaskThree } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/task1"
          element={<TaskOne />} />
        <Route
          path="/task2"
          element={<TaskTwo />} />
        <Route
          path="/task3"
          element={<TaskThree />} />
      </Routes>
    </Router>
  );
};

export default App;
