import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
              </>
            }
          />
          <Route path="/channels" element={<Home />} />
          <Route path="/channels/:id" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
