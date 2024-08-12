import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Testimonial from "./components/Testimonial/Testimonial";
import Accountancy from "./pages/Accountancy";
import Tax from "./pages/Tax";
import Audit from "./pages/Audit";
import BusinessAdvisory from "./pages/BusinessAdvisory";
import OperationsImprovement from "./pages/OperationsImprovement";
import HumanResourceManagement from "./pages/HumanResourceManagement";
import "./App.css";

function App() {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Companies />
                  <About setPlayState={setPlayState} />
                  <Value />
                  <Testimonial />
                  <Contact />
                  <GetStarted />
                </>
              }
            />
            <Route path="/accountancy" element={<Accountancy />} />
            <Route path="/tax" element={<Tax />} />
            <Route path="/audit" element={<Audit />} />
            <Route path="/business-advisory" element={<BusinessAdvisory />} />
            <Route
              path="/operations-improvement"
              element={<OperationsImprovement />}
            />
            <Route
              path="/human-resource-management"
              element={<HumanResourceManagement />}
            />
          </Routes>
          <Footer />
        </div>

        <VideoPlayer playState={playState} setPlayState={setPlayState} />
      </div>
    </Router>
  );
}

export default App;
