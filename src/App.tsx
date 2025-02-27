import "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Sidebar from "./components/sidebar";

// Pages
import ButtonPage from "./pages/button";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="app-sidebar">
          <Sidebar />
        </div>
        <div className="app-content">
          <h1>test</h1>
          <Routes>
            <Route path="/button" element={<ButtonPage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
