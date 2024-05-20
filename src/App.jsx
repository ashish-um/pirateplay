import "./App.css";
import Search from "./components/Search";
import Info from "./components/Info";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/info/:imdbId" element={<Info />} />
          <Route
            path="*"
            element={
              <h1 style={{ justifyContent: "center" }}>Page Not Found :(</h1>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
