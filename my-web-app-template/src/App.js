import logo from "./logo.svg";
import "./App.css";
import "./index.css";

import Navbar from "./components/Navbar";
import HomePage from "./Pages/Home";
import ProfilePage from "./Pages/Profile";
import MessagesPage from "./Pages/Messages";
import CameraPage from "./Pages/Camera";
import SettingsPage from "./Pages/Settings";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/messages" element={<MessagesPage />} />
          <Route exact path="/camera" element={<CameraPage />} />
          <Route exact path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
        <Navbar />
    </Router>
  );
}

export default App;
